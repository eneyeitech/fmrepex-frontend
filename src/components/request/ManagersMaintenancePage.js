import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import {getRequestsByManager} from "../../api/query/requetQueryApi";
import ManagersMaintenanceList from "./ManagersMaintenanceList";

function ManagersMaintenancePage(props) {

    const [maintenances, setMaintenances] = useState([]);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

            getRequestsByManager().then(response => {
                console.log(response);
                setMaintenances(response);
            });

    }, [])

    console.log(maintenances);
    return (
        <>
            <Container>
                <div className="p-md-5">
            <h4 className="pt-md-5">Maintenance Requests</h4>

            <ManagersMaintenanceList maintenances={maintenances}/>
                </div>
            </Container>

        </>
    );
}


export default ManagersMaintenancePage;
