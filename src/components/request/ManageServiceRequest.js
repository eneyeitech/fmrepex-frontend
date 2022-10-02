import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import MaintenanceForm from "./MaintenanceForm";
import {getRequestBySlug} from "../../api/query/requetQueryApi";
import {saveRequest} from "../../api/command/tenantApi";


const ManageServiceRequest = props => {
    const [errors, setErrors] = useState({});
    const [maintenance, setMaintenance] = useState({
        id: null,
        asset: "",
        category: "",
        description: "",
    });

    const { buildingId } = props;
    console.log(buildingId);

    useEffect(() => {
        const _maintenance = props.maintenance;
        const {service} = props;
        if (_maintenance) {
            setMaintenance(_maintenance);
        }  else if(service) {
            setMaintenance({...maintenance, asset:service});
        }
    }, [props.maintenance, props.service]);

    function handleChange({ target }) {
        setMaintenance({
            ...maintenance,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!maintenance.asset) _errors.asset = "Name is required";
        if (!maintenance.category) _errors.category = "Category is required"
        if (!maintenance.description) _errors.description = "Description is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        saveRequest(maintenance).then(response => {
            console.log(response);
            //props.history.push("/dashboard");
            toast.success("Maintenance Request sent.");
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5"></h2>
                <MaintenanceForm
                    errors={errors}
                    maintenance={maintenance}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                </div>
            </Container>
        </>
    );
};

export default ManageServiceRequest;
