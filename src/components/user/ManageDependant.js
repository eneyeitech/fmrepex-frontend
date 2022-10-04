import React, { useState, useEffect } from "react";
import * as tenantApi from "../../api/command/tenantApi";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import DependantForm from "./DependantForm";


const ManageDependant = props => {
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
        tenantApi.addDependant(user).then(() => {
            props.history.push("/tenant/users");
            toast.success("Signup successful.");
        });
    }

    return (
        <>
            <Container className="col-md-6 offset-md-3">
            <h2 className="pt-md-5">Add Dependant</h2>
            <DependantForm
                errors={errors}
                user={user}
                onChange={handleChange}
                onSubmit={handleSubmit}
            />
            </Container>
        </>
    );
};

export default ManageDependant;
