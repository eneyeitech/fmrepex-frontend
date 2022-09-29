import React, { useState, useEffect } from "react";
import * as userApi from "../../api/userApi";
import SignUpForm from "./SignUpForm";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import LoginForm from "./LoginForm";


const ManageLogin= props => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        id: null,
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

        if (!user.email) _errors.email = "Email is required";
        if (!user.password) _errors.password = "Password is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        userApi.loginUser(user).then(response => {
            const loggedInUser = response.user;
            localStorage.setItem('USROBJ', JSON.stringify(loggedInUser));
            localStorage.setItem('PSSWD', user.password);
            /**props.history.push({
                pathname: '/services',
                state: user
            });*/
            props.history.push({
                pathname: '/dashboard',
                state: loggedInUser
            });
            toast.success("Login successful.");

        });
    }

    return (
        <>
            <Container className="col-md-6 offset-md-3">
                <h2 className="pt-md-5">User Login</h2>
                <LoginForm
                    errors={errors}
                    user={user}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </>
    );
};

export default ManageLogin;
