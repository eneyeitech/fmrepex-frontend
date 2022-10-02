import React, { useState, useEffect } from "react";
import * as companyApi from "../../api/companyApi";
import * as managerApi from "../../api/command/managerApi"
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import CompanyForm from "../CompanyForm";
import {useLocation} from "react-router-dom";
import BuildingForm from "./BuildingForm";
import {getBuildingBySlug} from "../../api/query/buildingQueryApi";
import TenantInformation from "../tenant/TenantInformation";


const ManageBuilding = props => {
    const [errors, setErrors] = useState({});
    const [building, setBuilding] = useState({
        id: null,
        name: "",
        noOfFlats: 0,
        houseNo: "",
        streetName: "",
        townName: "",
        state: "",
        longitude: "",
        latitude: "",
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
        if (!building.noOfFlats) _errors.noOfFlats = "No of flats is required";
        if (!building.houseNo) _errors.houseNo = "House no is required";
        if (!building.streetName) _errors.streetName = "Street name is required";
        if (!building.townName) _errors.townName = "Town name is required";
        if (!building.state) _errors.state = "State is required";
        if (!building.longitude) _errors.longitude = "Longitude is required";
        if (!building.latitude) _errors.latitude = "Latitude is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        managerApi.saveBuilding(building).then(response => {
            console.log(response);

            props.history.push("/buildings");
            toast.success("Building saved.");
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5">Manage Building</h2>
                <BuildingForm
                    errors={errors}
                    building={building}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                {(building.id) && <TenantInformation building={building}/>}
                </div>
            </Container>
        </>
    );
};

export default ManageBuilding;
