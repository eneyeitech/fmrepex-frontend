import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import BuildingForm from "../building/BuildingForm";
import {useLocation} from "react-router-dom";
import {assignTenantToBuilding} from "../../api/command/managerApi";
import {toast} from "react-toastify";
import TenantAssignmentForm from "./TenantAssignmentForm";


function TenantAssignment(props) {

    const [errors, setErrors] = useState({});
    const [tenant, setTenant] = useState({
        id: null,
        email: "",
        buildingId:"",
        label:"",

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
        assignTenantToBuilding(tenant).then(response => {
            console.log(response);

            props.history.push(`/building/${location.state.buildingId}`);
            toast.success("Tenant assigned.");
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5">Assign Tenant</h2>
                <TenantAssignmentForm
                    errors={errors}
                    tenant={tenant}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                </div>
            </Container>
        </>
    );
}



export default TenantAssignment;