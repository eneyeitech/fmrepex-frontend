import React, { useState, useEffect } from "react";
import {getBuildingBySlug} from "../../api/query/buildingQueryApi";
import {toast} from "react-toastify";
import {Link} from "react-router-dom";
import MaintenanceList from "../request/MaintenanceList";
import MaintenanceRequestsPage from "../request/MaintenanceRequestsPage";
import {Container} from "reactstrap";

function BuildingInformation(props) {

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

    const [maintenances, setMaintenances] = useState([]);


    useEffect(() => {
        const bid = props.bid;
        if(bid){
            getBuildingBySlug(bid).then(response => {
                console.log(response);
                if(response){
                    setBuilding(response);
                }

                //toast.success("Building retrieved");
            });
        }

    }, [props.bid]);

    if(building.name){
        return (
            <>
                <Container>
                    <div className="p-md-5">
                <div
                    className="row g-0 border rounded overflow-hidden flex-md-row mb-4 mt-4 shadow-sm h-md-250 position-relative">
                    <div className="col p-4 d-flex flex-column">
                        <h4 className="mb-3 text-muted">Building Detail</h4>
                        <strong className="d-inline-block mb-2 text-primary">{building.name}</strong>
                        <h6 className="mb-0">{building.streetName}</h6>
                        <div className="mb-4 text-muted">{building.state}</div>
                        <p className="card-text mb-auto"></p>
                        <a href="src/components/building/BuildingInformation#" className="stretched-link"></a>
                    </div>
                </div>

                <MaintenanceRequestsPage bid={building.id}/>

                    </div>
                </Container>

            </>
        );
    }else{
        return (
            <>
                <Container>
                    <div className="p-md-5">
                <h3 className="pt-md-2">No building information</h3>
                    </div>
                </Container>

            </>
        );
    }


}



export default BuildingInformation;