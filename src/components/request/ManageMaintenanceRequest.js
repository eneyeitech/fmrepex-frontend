import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import {useLocation} from "react-router-dom";
import MaintenanceForm from "./MaintenanceForm";
import {getRequestBySlug} from "../../api/query/requetQueryApi";
import {saveRequest} from "../../api/command/tenantApi";


const ManageMaintenanceRequest = props => {
    const [errors, setErrors] = useState({});
    const [maintenance, setMaintenance] = useState({
        id: null,
        asset: "",
        category: "",
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
            getRequestBySlug(slug).then(response=>{
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

            props.history.push("/dashboard");
            toast.success("Maintenance Request sent.");
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5">Make Request</h2>
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

export default ManageMaintenanceRequest;
