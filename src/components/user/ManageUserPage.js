import React, { useState, useEffect } from "react";
import * as managerApi from "../../api/command/managerApi";
import SignUpForm from "../authentication/SignUpForm";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import UserForm from "./UserForm";
import {getBuildingBySlug} from "../../api/buildingApi";
import {getUserBySlug} from "../../api/userApi";


const ManageUserPage = props => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        id: null,
        type:"",
        name: "",
        //lastname: "",
        email: "",
        phone:"",
        pass: ""
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
                //let lastname = response.lastname;
                let email = response.email;
                let type = response.type;
                setUser({...user,id, name, email, type});
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
        //if (!user.lastname) _errors.lastname = "Lastname is required";
        if (!user.email) _errors.email = "Email is required";
        if (!user.phone) _errors.phone = "Phone number is required";
        if (!user.pass) _errors.pass = "Password is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        managerApi.addUser(user).then(() => {
            props.history.push("/users");
            toast.success("User saved.");
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5">Add User</h2>
                <UserForm
                    errors={errors}
                    user={user}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                </div>
            </Container>
        </>
    );
};

export default ManageUserPage;
