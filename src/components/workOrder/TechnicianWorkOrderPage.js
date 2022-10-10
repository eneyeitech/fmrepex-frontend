import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import {getWorkOrdersByTechnician} from "../../api/query/workOrderQueryApi";
import * as techApi from "../../api/command/technicianCommandApi";
import TechnicianWorkOrderList from "./TechnicianWorkOrderList";
import workOrdersStore from "../../stores/workOrdersStore";
import {
    loadWorkOrdersByTechnician,
    acceptWorkOrder,
    completeWorkOrder,
    loadWorkOrdersByManager
} from "../../actions/workOrderActions";
import userStore from "../../stores/userStore";
import * as userActions from "../../actions/userActions";
import {toast} from "react-toastify";

function TechnicianWorkOrderPage(props) {

    const [workOrders, setWorkOrders] = useState(workOrdersStore.getWorkOrders);
    const [changed, setChanged] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        workOrdersStore.addChangeListener(onChange);
        if(workOrdersStore.getWorkOrders().length === 0) loadWorkOrdersByTechnician();
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
        acceptWorkOrder(id);
    }

    const complete = (id) => {
        /**techApi.completeWorkOrder(id).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });*/

        completeWorkOrder(id);
    }

    console.log(workOrders);
    return (
        <>
            <Container>
                <div className="p-md-5">
            <h4 className="pt-md-5">Maintenance Work Orders</h4>

            <TechnicianWorkOrderList workOrders={workOrders} onClick={handleClick}/>
                </div>
            </Container>

        </>
    );
}


export default TechnicianWorkOrderPage;
