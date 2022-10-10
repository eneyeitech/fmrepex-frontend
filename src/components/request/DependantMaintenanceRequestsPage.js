import React, { useState, useEffect } from "react";
import MaintenanceList from "./MaintenanceList";
import {Container} from "reactstrap";
import requestStore from "../../stores/requestStore";
import {dependantSignOffRequest, loadRequestsByDependant} from "../../actions/requestActions";


function DependantMaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState(requestStore.getRequests);
    const [changed, setChanged] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

        requestStore.addChangeListener(onChange);
        if(requestStore.getRequests().length === 0) loadRequestsByDependant();
        return () => requestStore.removeChangeListener(onChange); // cleanup on mount
    }, [changed])

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
        /**depApi.signOffRequest(id).then(response=>{
            console.log(response);
            setChanged(!changed);
        }).catch(r=>{
            console.log("Error", r)
        });*/
        dependantSignOffRequest(id);
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
