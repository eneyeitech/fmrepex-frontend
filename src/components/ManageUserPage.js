import React, { useState, useEffect } from "react";
import * as userApi from "../api/userApi";
import SignUpForm from "./SignUpForm";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import UserForm from "./UserForm";
import {getBuildingBySlug} from "../api/buildingApi";
import {getUserBySlug} from "../api/userApi";


const ManageUserPage = props => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        id: null,
        type:"",
        name: "",
        lastname: "",
        email: "",
        password: ""
    });

    useEffect(() => {
        const _user = props.user;
        const slug = props.match.params.slug // from the path `/user/:slug
        console.log("SLUG", slug);
        if (_user) {
            setUser(_user);
        } else if(slug) {
            getUserBySlug(slug).then(response=>{
                console.log(response.name);
                let id = response.id;
                let name = response.name;
                let lastname = response.lastname;
                let email = response.email;
                let type = response.type;
                setUser({...user,id, name, lastname, email, type});
            })
        }
    }, [props.user, props.match.params.slug]);

    function handleChange({ target }) {
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!user.type) _errors.type = "Type is required";
        if (!user.name) _errors.name = "Name is required";
        if (!user.lastname) _errors.lastname = "Lastname is required";
        if (!user.email) _errors.email = "Email is required";
        if (!user.password) _errors.password = "Password is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        if (!user.id) return;
        event.preventDefault();
        if (!formIsValid()) return;
        userApi.addUser(user).then(() => {
            props.history.push("/users");
            toast.success("User saved.");
        });
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">Add User</h2>
                <UserForm
                    errors={errors}
                    user={user}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </>
    );
};

export default ManageUserPage;
