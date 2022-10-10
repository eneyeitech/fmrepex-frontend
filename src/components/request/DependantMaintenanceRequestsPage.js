import React, { useState, useEffect } from "react";
import MaintenanceList from "./MaintenanceList";
import {Container} from "reactstrap";
import requestStore from "../../stores/requestStore";
import {dependantSignOffRequest, loadRequestsByDependant} from "../../actions/requestActions";
import ClipLoader from "react-spinners/ClipLoader";


function DependantMaintenanceRequestsPage(props) {

    const [maintenances, setMaintenances] = useState(requestStore.getRequests);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

        requestStore.addChangeListener(onChange);
        if(requestStore.getRequests().length === 0) {
            setLoading(true);
            loadRequestsByDependant().then(()=>{
                setLoading(false);
            });
        }
        return () => requestStore.removeChangeListener(onChange); // cleanup on mount
    }, [])

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
        setLoading(true);
        dependantSignOffRequest(id).then(()=>{
            setLoading(false);
        });
    }

    return (
        <>
            <Container>
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
                        <MaintenanceList maintenances={maintenances} bid={bid} onClick={handleClick}/>
                    </div>
                }
            </Container>
        </>
    );
}


export default DependantMaintenanceRequestsPage;
