import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import MaintenanceList from "./MaintenanceList";
import requestStore from "../../stores/requestStore";
import {loadRequestsByTenant, tenantSignOffRequest} from "../../actions/requestActions";


function MaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState(requestStore.getRequests);
    const [changed, setChanged] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        const _bid = props.bid;
        if(_bid){
            requestStore.addChangeListener(onChange);
            if(requestStore.getRequests().length === 0) loadRequestsByTenant();
            return () => requestStore.removeChangeListener(onChange); // cleanup on mount
        }
    }, [props.bid, changed])




function onChange(){
    setMaintenances(requestStore.getRequests());
}

    console.log(maintenances);

    const handleClick = (w) => {
        //console.log("1-Mango Apple", e);
        if(w.status === "COMPLETED"){
            console.log("Sign-Off");
            signOff(w.id);
        }
    }

    const signOff = (id) => {
        tenantSignOffRequest(id);
    }

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
                <MaintenanceList maintenances={maintenances} bid={bid} onClick={handleClick}/>
            </div>
        </>
    );
}


export default MaintenanceRequestsPage;
