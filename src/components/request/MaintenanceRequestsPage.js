import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import {getRequestsByTenant} from "../../api/query/requetQueryApi";
import MaintenanceList from "./MaintenanceList";

function MaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState([]);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        const _bid = props.bid;
        if(_bid){
            getRequestsByTenant(_bid).then(response => {
                console.log(response);
                setMaintenances(response);
            });
        }
    }, [props.bid])

    console.log(maintenances);
    return (
        <>
            <div className="p-md-5">
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
            </div>
        </>
    );
}


export default MaintenanceRequestsPage;
