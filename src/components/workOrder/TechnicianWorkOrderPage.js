import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import {getWorkOrdersByTechnician} from "../../api/query/workOrderQueryApi";
import * as techApi from "../../api/command/technicianCommandApi";
import TechnicianWorkOrderList from "./TechnicianWorkOrderList";

function TechnicianWorkOrderPage(props) {

    const [workOrders, setWorkOrders] = useState([]);
    const [changed, setChanged] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

            getWorkOrdersByTechnician().then(response => {
                console.log(response);
                setWorkOrders(response);
            });

    }, [changed]);

    const handleClick = (w) => {
        //console.log("1-Mango Apple", e);
        if(w.status === "PENDING"){
            console.log("Approve");
            acceptWorkOrder(w.id);
        } else if(w.status === "ACTIVE"){
            console.log("Complete")
            completeWorkOrder(w.id);
        }
    }

    const acceptWorkOrder = (id) => {
        techApi.acceptWorkOrder(id).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });
    }

    const completeWorkOrder = (id) => {
        techApi.completeWorkOrder(id).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });
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
