import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import ManagerWorkOrderList from "./ManagerWorkOrderList";
import workOrdersStore from "../../stores/workOrdersStore";
import userStore from "../../stores/userStore";
import {loadWorkOrdersByManager} from "../../actions/workOrderActions";
function ManagerWorkOrderPage(props) {

    const [workOrders, setWorkOrders] = useState(workOrdersStore.getWorkOrders);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        workOrdersStore.addChangeListener(onChange);
        if(workOrdersStore.getWorkOrders().length === 0) loadWorkOrdersByManager();
        return () => workOrdersStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setWorkOrders(workOrdersStore.getWorkOrders());
    }

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
