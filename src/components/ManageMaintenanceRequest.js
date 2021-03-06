import React, { useState, useEffect } from "react";
import * as companyApi from "../api/companyApi";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import CompanyForm from "./CompanyForm";
import {useLocation} from "react-router-dom";
import BuildingForm from "./BuildingForm";
import {getBuildingBySlug, saveBuilding} from "../api/buildingApi";
import TenantInformation from "./TenantInformation";
import MaintenanceForm from "./MaintenanceForm";
import {getMaintenanceBySlug, saveMaintenance} from "../api/maintenanceApi";


const ManageMaintenanceRequest = props => {
    const [errors, setErrors] = useState({});
    const [maintenance, setMaintenance] = useState({
        id: null,
        name: "",
        description: "",
    });

    const location = useLocation();
    const { buildingId } = location.state;
    console.log(buildingId);

    useEffect(() => {
        const _maintenance = props.maintenance;
        const slug = props.match.params.slug // from the path `/building/:slug
        console.log("SLUG", slug);
        if (_maintenance) {
            setMaintenance(_maintenance);
        } else if(slug) {
            getMaintenanceBySlug(slug).then(response=>{
                console.log(response);
                setMaintenance(response);
            })
        }
    }, [props.maintenance, props.match.params.slug]);

    function handleChange({ target }) {
        setMaintenance({
            ...maintenance,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!maintenance.name) _errors.name = "Name is required";
        if (!maintenance.description) _errors.description = "Description is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        saveMaintenance(maintenance, buildingId).then(response => {
            console.log(response);

            props.history.push("/dashboard");
            toast.success("Maintenance Request sent.");
        });
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">Make Request</h2>
                <MaintenanceForm
                    errors={errors}
                    maintenance={maintenance}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </>
    );
};

export default ManageMaintenanceRequest;
