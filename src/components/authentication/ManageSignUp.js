import React, { useState, useEffect } from "react";
import * as managerApi from "../../api/command/managerApi";
import SignUpForm from "./SignUpForm";
import {Container} from "reactstrap";
import { toast } from "react-toastify";


const ManageSignUp = props => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        id: null,
        name: "",
        email: "",
        phone:"",
        pass: ""
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
        managerApi.managerSignUp(user).then(() => {
            props.history.push("/login");
            toast.success("Signup successful.");
        });
    }

    return (
        <>
            <Container className="col-md-6 offset-md-3">
            <h2 className="pt-md-5">User Signup (Manager)</h2>
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
