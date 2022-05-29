import React, { useState, useEffect } from "react";
import * as companyApi from "../api/companyApi";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import CompanyForm from "./CompanyForm";
import {useLocation} from "react-router-dom";


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

    const location = useLocation();
    const { companyId } = location.state;
    console.log(companyId);

    useEffect(() => {
        const _company = props.company;
        const slug = companyId ? companyId: null;//"17991faf-f2e0-4fa8-90a6-d7094566e3d0";
        console.log("SLUG", slug);
        if (_company) {
            setCompany(_company);
        } else if(slug) {
            companyApi.getCompanyBySlug(slug).then(response=>{
                console.log(response);
                setCompany(response);
            })
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
        companyApi.saveCompany(company).then(response => {
            console.log(response);

            //props.history.push("/company");
            props.history.push({
                pathname: '/company',
                state: {companyId:companyId}
            });
            toast.success("Company saved.");
        });
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">Manage Company</h2>
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
