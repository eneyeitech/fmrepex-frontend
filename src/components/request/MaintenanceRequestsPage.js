import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import MaintenanceList from "./MaintenanceList";
import requestStore from "../../stores/requestStore";
import {loadRequestsByTenant, tenantSignOffRequest} from "../../actions/requestActions";
import ClipLoader from "react-spinners/ClipLoader";


function MaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState(requestStore.getRequests);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        const _bid = props.bid;
        if(_bid){
            requestStore.addChangeListener(onChange);
            if(requestStore.getRequests().length === 0) {
                setLoading(true);
                loadRequestsByTenant().then(()=>{
                    setLoading(false);
                });
            }
            return () => requestStore.removeChangeListener(onChange); // cleanup on mount
        }
    }, [props.bid])




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
        setLoading(true);
        tenantSignOffRequest(id).then(()=>{
            setLoading(false);
        });
    }

    return (
        <>
            {loading ?
                <ClipLoader
                    loading={loading}
                    cssOverride={{
                        display: "block",
                        margin: "0 auto",
                        borderColor: "blue",
                    }}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
                :
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
            }
        </>
    );
}


export default MaintenanceRequestsPage;
