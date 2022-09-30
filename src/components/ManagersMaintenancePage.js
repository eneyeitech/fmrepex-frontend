import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./user/UserList";
import {Container} from "reactstrap";
import {getUsers} from "../api/userApi";
import {modifiedUsers} from "../business/usersService";
import {getMaintenances, getManagerMaintenances} from "../api/maintenanceApi";
import MaintenanceList from "./MaintenanceList";
import {getBuildings} from "../api/buildingApi";
import ManagersMaintenanceList from "./ManagersMaintenanceList";

function ManagersMaintenancePage(props) {

    const [maintenances, setMaintenances] = useState([]);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

            getManagerMaintenances().then(response => {
                console.log(response);
                setMaintenances(response);
            });

    }, [])

    console.log(maintenances);
    return (
        <>
            <Container>
            <h4 className="pt-md-5">Maintenance Requests</h4>

            <ManagersMaintenanceList maintenances={maintenances}/>
            </Container>

        </>
    );
}


export default ManagersMaintenancePage;
