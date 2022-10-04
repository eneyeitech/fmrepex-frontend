import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import {getWorkOrdersByManager} from "../../api/query/workOrderQueryApi";
import TechnicianWorkOrderList from "./TechnicianWorkOrderList";
import ManagerWorkOrderList from "./ManagerWorkOrderList";

function ManagerWorkOrderPage(props) {

    const [workOrders, setWorkOrders] = useState([]);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {

        getWorkOrdersByManager().then(response => {
                console.log(response);
                setWorkOrders(response);
            });

    }, []);

    console.log(workOrders);
    return (
        <>
            <Container>
                <div className="p-md-5">
            <h4 className="pt-md-5">Maintenance Work Orders</h4>

            <ManagerWorkOrderList workOrders={workOrders}/>
                </div>
            </Container>

        </>
    );
}


export default ManagerWorkOrderPage;
