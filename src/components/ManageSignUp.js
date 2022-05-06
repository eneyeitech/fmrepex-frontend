import React, { useState, useEffect } from "react";
import * as userApi from "../api/userApi";
import SignUpForm from "./SignUpForm";
import {Container} from "reactstrap";
import { toast } from "react-toastify";


const ManageSignUp = props => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        id: null,
        name: "",
        lastname: "",
        email: "",
        password: ""
    });


    function handleChange({ target }) {
        setUser({
            ...user,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!user.name) _errors.name = "Name is required";
        if (!user.lastname) _errors.lastname = "Lastname is required";
        if (!user.email) _errors.email = "Email is required";
        if (!user.password) _errors.password = "Password is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        userApi.saveUser(user).then(() => {
            //props.history.push("/courses");
            toast.success("User saved.");
        });
    }

    return (
        <>
            <Container>
            <h2>User Sign Up</h2>
            <SignUpForm
                errors={errors}
                user={user}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            </Container>
        </>
    );
};

export default ManageSignUp;
