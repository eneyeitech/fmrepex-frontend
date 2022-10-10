import React, { useState, useEffect } from "react";
import {Container} from "reactstrap";
import ManagerWorkOrderList from "./ManagerWorkOrderList";
import workOrdersStore from "../../stores/workOrdersStore";
import userStore from "../../stores/userStore";
import {loadWorkOrdersByManager} from "../../actions/workOrderActions";
import ClipLoader from "react-spinners/ClipLoader";
function ManagerWorkOrderPage(props) {

    const [workOrders, setWorkOrders] = useState(workOrdersStore.getWorkOrders);
    const [loading, setLoading] = useState(false);
    const {bid} = props;
    console.log(bid);
    useEffect( () => {
        workOrdersStore.addChangeListener(onChange);
        if(workOrdersStore.getWorkOrders().length === 0) {
            setLoading(true);
            loadWorkOrdersByManager().then(()=>{
                setLoading(false);
            });
        }
        return () => workOrdersStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setWorkOrders(workOrdersStore.getWorkOrders());
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

                        <ManagerWorkOrderList workOrders={workOrders}/>
                    </div>
                }
            </Container>

        </>
    );
}


export default ManagerWorkOrderPage;
