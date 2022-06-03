import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getUsers} from "../api/userApi";
import {modifiedUsers} from "../business/usersService";
import {getMaintenances} from "../api/maintenanceApi";
import MaintenanceList from "./MaintenanceList";
import {getBuildings} from "../api/buildingApi";

function MaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState([]);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        const _bid = props.bid;
        if(_bid){
            getMaintenances(_bid).then(response => {
                console.log(response);
                setMaintenances(response);
            });
        }
    }, [props.bid])

    console.log(maintenances);
    return (
        <>
                <h4 className="pt-md-2">Maintenance Requests</h4>

            <Link className="btn btn-primary" to={{
                pathname: "/services/request",
                state: {
                    buildingId: bid,
                },
            }}>
                Make Maintenance Request
            </Link>
                <MaintenanceList maintenances={maintenances} bid={bid}/>

        </>
    );
}


export default MaintenanceRequestsPage;
