import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import {getRequestsByManager} from "../../api/query/requestQueryApi";
import ManagersMaintenanceList from "./ManagersMaintenanceList";
import requestStore from "../../stores/requestStore";
import {loadRequestsByManager, loadRequestsByTenant} from "../../actions/requestActions";
import ClipLoader from "react-spinners/ClipLoader";

function ManagersMaintenancePage(props) {

    const [maintenances, setMaintenances] = useState(requestStore.getRequests);
    const [loading, setLoading] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

            /**getRequestsByManager().then(response => {
                console.log(response);
                setMaintenances(response);
            });*/

        requestStore.addChangeListener(onChange);
        if(requestStore.getRequests().length === 0) {
            setLoading(true)
            loadRequestsByManager().then(()=>{
                setLoading(false);
            });
        }
        return () => requestStore.removeChangeListener(onChange); // cleanup on mount

    }, []);

    function onChange(){
        setMaintenances(requestStore.getRequests());
    }

    console.log(maintenances);
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
                        <h4 className="pt-md-5">Maintenance Requests</h4>

                        <ManagersMaintenanceList maintenances={maintenances}/>
                    </div>
                }
            </Container>

        </>
    );
}


export default ManagersMaintenancePage;
