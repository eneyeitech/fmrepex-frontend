import React, { useState, useEffect } from "react";
import * as companyApi from "../api/companyApi";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import CompanyForm from "./CompanyForm";


const ManageCompany = props => {
    const [errors, setErrors] = useState({});
    const [company, setCompany] = useState({
        id: null,
        name: "",
        state: "",
        town: "",
        street: "",
        number: "",
        cacNumber: "",
        officePhoneNumber:""
    });

    useEffect(() => {
        const _company = props.company;
        if (_company) {
            setCompany(_company);
        }
    }, [props.company]);

    function handleChange({ target }) {
        setCompany({
            ...company,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!company.name) _errors.name = "Name is required";
        if (!company.state) _errors.state = "State is required";
        if (!company.town) _errors.town = "Town is required";
        if (!company.street) _errors.street = "Street is required";
        if (!company.number) _errors.number = "Number is required";
        if (!company.cacNumber) _errors.cacNumber = "CAC Number is required";
        if (!company.officePhoneNumber) _errors.officePhoneNumber = "Office Phone Number is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        companyApi.saveCompany(company).then(() => {
            props.history.push("/login");
            toast.success("Company saved.");
        });
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">User Signup</h2>
                <CompanyForm
                    errors={errors}
                    company={company}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </>
    );
};

export default ManageCompany;
