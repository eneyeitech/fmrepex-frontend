import React, { useState, useEffect } from "react";
import * as companyApi from "../api/companyApi";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import CompanyForm from "./CompanyForm";
import {useLocation} from "react-router-dom";
import BuildingForm from "./BuildingForm";
import {getBuildingBySlug, saveBuilding} from "../api/buildingApi";


const ManageBuilding = props => {
    const [errors, setErrors] = useState({});
    const [building, setBuilding] = useState({
        id: null,
        name: "",
        address: "",
        state: "",
    });

    const location = useLocation();


    useEffect(() => {
        const _building = props.building;
        const slug = props.match.params.slug // from the path `/building/:slug
        console.log("SLUG", slug);
        if (_building) {
            setBuilding(_building);
        } else if(slug) {
            getBuildingBySlug(slug).then(response=>{
                console.log(response);
                setBuilding(response);
            })
        }
    }, [props.building, props.match.params.slug]);

    function handleChange({ target }) {
        setBuilding({
            ...building,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!building.name) _errors.name = "Name is required";
        if (!building.address) _errors.address = "Address is required";
        if (!building.state) _errors.state = "State is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        saveBuilding(building).then(response => {
            console.log(response);

            props.history.push("/buildings");
            toast.success("Building saved.");
        });
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">Manage Building</h2>
                <BuildingForm
                    errors={errors}
                    building={building}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </>
    );
};

export default ManageBuilding;
