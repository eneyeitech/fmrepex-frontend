import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import {getRequestsByTenant} from "../../api/query/requestQueryApi";
import MaintenanceList from "./MaintenanceList";
import * as tenApi from "../../api/command/tenantApi";

function MaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState([]);
    const [changed, setChanged] = useState(false);
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
    }, [props.bid, changed])

    console.log(maintenances);

    const handleClick = (w) => {
        //console.log("1-Mango Apple", e);
        if(w.status === "COMPLETED"){
            console.log("Sign-Off");
            signOffRequest(w.id);
        }
    }

    const signOffRequest = (id) => {
        tenApi.signOffRequest(id).then(response=>{
            console.log(response);
            setChanged(!changed);
        }).catch(r=>{
            console.log("Error", r)
        });
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