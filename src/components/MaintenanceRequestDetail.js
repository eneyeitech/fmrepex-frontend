import React, { useState, useEffect } from "react";
import * as companyApi from "../api/companyApi";
import {CardImg, Container} from "reactstrap";
import { toast } from "react-toastify";
import CompanyForm from "./CompanyForm";
import {useLocation} from "react-router-dom";
import BuildingForm from "./BuildingForm";
import {getBuildingBySlug, saveBuilding} from "../api/buildingApi";
import TenantInformation from "./TenantInformation";
import MaintenanceForm from "./MaintenanceForm";
import {getMaintenanceBySlug, saveMaintenance} from "../api/maintenanceApi";


const MaintenanceRequestDetail = props => {
    const [errors, setErrors] = useState({});
    const [maintenance, setMaintenance] = useState({
        id: null,
        name: "",
        description: "",
        status:"",
        building: {
            name:"",
            address:"",
            state:"",
            user:{
                name:"",
                lastname:"",
                email:"",
                phonenumber:"",
            }
        }
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

    const handleClick = () => {
        console.log("Mango Apple");
    }

    return (
        <>
            <Container>
                <h2 className="pt-md-5">Maintenance Dashboard</h2>
                <div className="row text-muted">

                    <div className="col-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h4 className="mb-3">Building Information</h4>
                                <strong className="d-inline-block mb-2 text-primary">{maintenance.building.name}</strong>
                                <h6 className="mb-0">{maintenance.building.address}</h6>
                                <div className="mb-4 text-muted">{maintenance.building.state}</div>
                                <p className="card-text mb-auto"></p>

                                <a href="#" className="stretched-link"></a>

                                <h4 className="mb-4">Tenant Information</h4>
                                <strong className="d-inline-block mb-0 text-success">{maintenance.building.user.name} {maintenance.building.user.lastname}</strong>
                                <h6 className="mb-0">{maintenance.building.user.email}</h6>
                                <div className="mb-4 text-muted">{maintenance.building.user.phonenumber}</div>
                            </div>
                        </div>
                    </div>

                    <div className="col-6">
                        <div
                            className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                            <div className="col p-4 d-flex flex-column position-static">
                                <h4 className="mb-3">Maintenance Request Information</h4>
                                <strong className="d-inline-block mb-2 text-dark">{maintenance.name}</strong>
                                <h6 className="mb-0"></h6>
                                <div className="mb-4 text-muted">{maintenance.status}</div>
                                <p className="card-text mb-auto">{maintenance.description}</p>
                                <a href="#" className="stretched-link"></a>
                                <input type="button" onClick={handleClick}/>
                                <button className="mt-2 btn btn-outline-dark dropdown-toggle" type="button" onClick={handleClick}>Schedule</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default MaintenanceRequestDetail;
