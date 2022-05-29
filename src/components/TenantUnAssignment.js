import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import BuildingForm from "./BuildingForm";
import {useLocation} from "react-router-dom";
import {assignTenantToBuilding, getBuildingBySlug, saveBuilding, unAssignTenantToBuilding} from "../api/buildingApi";
import {toast} from "react-toastify";
import TenantAssignmentForm from "./TenantAssignmentForm";


function TenantUnAssignment(props) {

    const [errors, setErrors] = useState({});
    const [tenant, setTenant] = useState({
        id: null,
        email: "",
        buildingId:"",

    });

    const location = useLocation();


    useEffect(() => {
        const { buildingId } = location.state;
        if(buildingId){
            setTenant({...tenant, buildingId: buildingId})
        }
    }, [location.state.buildingId]);

    function handleChange({ target }) {
        setTenant({
            ...tenant,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!tenant.email) _errors.email = "Email is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        unAssignTenantToBuilding(tenant).then(response => {
            console.log(response);

            props.history.push(`/building/${location.state.buildingId}`);
            toast.success("Tenant unassigned.");
        });
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">Unassign Tenant</h2>
                <TenantAssignmentForm
                    errors={errors}
                    tenant={tenant}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
            </Container>
        </>
    );
}



export default TenantUnAssignment;