import React, { useState, useEffect } from "react";
import {CardImg, Container} from "reactstrap";
import {useLocation} from "react-router-dom";
import {getRequestBySlug} from "../../api/query/requestQueryApi";
import {getBuildingBySlug} from "../../api/query/buildingQueryApi";
import {getUserBySlug} from "../../api/query/userQueryApi";
import {createWorkOrder} from "../../api/command/managerApi";
import {toast} from "react-toastify";
import WorkOrderForm from "./WorkOrderForm";


const MaintenanceRequestDetail = props => {
    const [errors, setErrors] = useState({});
    const [building, setBuilding] = useState({
        id:null,
        name:"",
        streetName:"",
        state:"",
    });
    const [tenant, setTenant] = useState({
        id:null,
        fullName:"",
        email:"",
        phoneNumber:"",
    });
    const [maintenance, setMaintenance] = useState({
        id: null,
        asset: "",
        description: "",
        status:"",
        buildingId:null,
        tenantEmail:null
    });

    const [workOrder, setWorkOrder] = useState({
        id: null,
        description: "",
        technicianEmail:"",
        requestId:null,
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
        if(maintenance.buildingId){
            getBuildingBySlug(maintenance.buildingId).then(response=>{
                console.log(response);
                setBuilding(response);
            })
        }
        if(maintenance.tenantEmail){
            getUserBySlug(maintenance.tenantEmail).then(response=>{
                console.log(response);
                setTenant(response);
            })
        }
        if(maintenance.id){
            setWorkOrder({...workOrder, requestId:maintenance.id});
        }
    }, [props.maintenance, props.match.params.slug, maintenance.buildingId, maintenance.tenantEmail, maintenance.id]);


    function handleChange({ target }) {
        setWorkOrder({
            ...workOrder,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!workOrder.technicianEmail) _errors.technicianEmail = "Email is required";
        if (!workOrder.description) _errors.description = "Description is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;
        createWorkOrder(workOrder).then(response => {
            console.log(response);

            props.history.push(`/maintenance`);
            toast.success("Work Order created.");
        });
    }


    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5">Maintenance Dashboard</h2>
                <div className="row text-muted">

                    <div className="col-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h4 className="mb-3">Building Information</h4>
                                <strong className="d-inline-block mb-2 text-primary">{building.name}</strong>
                                <h6 className="mb-0">{building.streetName}</h6>
                                <div className="mb-4 text-muted">{building.state}</div>
                                <p className="card-text mb-auto"></p>

                                <h4 className="mb-4">Tenant Information</h4>
                                <strong className="d-inline-block mb-0 text-success">{tenant.fullName}</strong>
                                <h6 className="mb-0">{tenant.email}</h6>
                                <div className="mb-4 text-muted">{tenant.phoneNumber}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h4 className="mb-3">Maintenance Request Information</h4>
                                <strong className="d-inline-block mb-2 text-dark">{maintenance.asset}</strong>
                                <h6 className="mb-0"></h6>
                                <div className="mb-4 text-muted">{maintenance.status}</div>
                                <p className="card-text mb-auto">{maintenance.description}</p>
                                {maintenance.status == "PENDING" &&
                                    <WorkOrderForm
                                        errors={errors}
                                        workOrder={workOrder}
                                        onChange={handleChange}
                                        onSubmit={handleSubmit}
                                    />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </Container>
        </>
    );
};

export default MaintenanceRequestDetail;