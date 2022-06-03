import React, { useState, useEffect } from "react";
import {getTenantBuildings, unAssignTenantToBuilding} from "../api/buildingApi";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import MaintenanceList from "./MaintenanceList";
import MaintenanceRequestsPage from "./MaintenanceRequestsPage";

function BuildingInformation(props) {

    const [building, setBuilding] = useState({
        name: "",
        address: "",
        state: "",
    });

    const [maintenances, setMaintenances] = useState([]);


    useEffect(() => {
        const uid = props.uid;
        if(uid){
            getTenantBuildings(uid).then(response => {
                console.log(response);
                if(response[0]){
                    setBuilding(response[0]);
                }

                //toast.success("Building retrieved");
            });
        }

    }, [props.uid]);

    if(building.name){
        return (
            <>
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 mt-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column">
                        <h4 className="mb-3 text-muted">Building Detail</h4>
                        <strong className="d-inline-block mb-2 text-primary">{building.name}</strong>
                        <h6 className="mb-0">{building.address}</h6>
                        <div className="mb-4 text-muted">{building.state}</div>
                        <p className="card-text mb-auto"></p>
                        <a href="#" className="stretched-link"></a>
                    </div>
                </div>

                <MaintenanceRequestsPage bid={building.id}/>

            </>
        );
    }else{
        return (
            <>
                <h3 className="pt-md-2">No building information</h3>

            </>
        );
    }


}



export default BuildingInformation;