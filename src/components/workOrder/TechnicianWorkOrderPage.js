import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import TechnicianWorkOrderList from "./TechnicianWorkOrderList";
import workOrdersStore from "../../stores/workOrdersStore";
import {
    loadWorkOrdersByTechnician,
    acceptWorkOrder,
    completeWorkOrder,
} from "../../actions/workOrderActions";
import ClipLoader from "react-spinners/ClipLoader";

function TechnicianWorkOrderPage(props) {

    const [workOrders, setWorkOrders] = useState(workOrdersStore.getWorkOrders);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        workOrdersStore.addChangeListener(onChange);
        if(workOrdersStore.getWorkOrders().length === 0) {
            setLoading(true);
            loadWorkOrdersByTechnician().then(()=>{
                setLoading(false);
            });
        }
        return () => workOrdersStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setWorkOrders(workOrdersStore.getWorkOrders());
    }
    const handleClick = (w) => {
        //console.log("1-Mango Apple", e);
        if(w.status === "PENDING"){
            console.log("Approve");
            accept(w.id);
        } else if(w.status === "ACTIVE"){
            console.log("Complete")
            complete(w.id);
        }
    }

    const accept = (id) => {
        /**techApi.acceptWorkOrder(id).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });*/
        setLoading(true);
        acceptWorkOrder(id).then(()=>{
            setLoading(false);
        });
    }

    const complete = (id) => {
        /**techApi.completeWorkOrder(id).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });*/

        setLoading(true);
        completeWorkOrder(id).then(()=>{
            setLoading(false);
        });
    }

    console.log(workOrders);
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
                        <h4 className="pt-md-5">Maintenance Work Orders</h4>

                        <TechnicianWorkOrderList workOrders={workOrders} onClick={handleClick}/>
                    </div>
                }
            </Container>

        </>
    );
}


export default TechnicianWorkOrderPage;
