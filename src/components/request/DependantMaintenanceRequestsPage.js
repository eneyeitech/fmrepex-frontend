import React, { useState, useEffect } from "react";
import {getRequestsByDependant} from "../../api/query/requestQueryApi";
import MaintenanceList from "./MaintenanceList";
import * as depApi from "../../api/command/dependantApi";
import {Container} from "reactstrap";

function DependantMaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState([]);
    const [changed, setChanged] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

            getRequestsByDependant().then(response => {
                console.log(response);
                setMaintenances(response);
            });
    }, [changed])

    console.log(maintenances);

    const handleClick = (w) => {
        //console.log("1-Mango Apple", e);
        if(w.status === "COMPLETED"){
            console.log("Sign-Off");
            signOffRequest(w.id);
        }
    }

    const signOffRequest = (id) => {
        depApi.signOffRequest(id).then(response=>{
            console.log(response);
            setChanged(!changed);
        }).catch(r=>{
            console.log("Error", r)
        });
    }

    return (
        <>
            <Container>
            <div className="p-md-5">
                <h4 className="pt-md-2">Maintenance Requests</h4>
                <MaintenanceList maintenances={maintenances} bid={bid} onClick={handleClick}/>
            </div>
            </Container>
        </>
    );
}


export default DependantMaintenanceRequestsPage;
