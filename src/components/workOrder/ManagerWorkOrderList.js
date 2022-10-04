import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function ManagerWorkOrderList(props) {

    const text = (w) => {
        if(w.status){
            if(w.status === "PENDING"){
                return "Accept";
            }
            if(w.status === "ACTIVE"){
                return "Complete";
            }
            if(w.status === "COMPLETED"){
                return "Completed";
            }
        }
        return "";
    }
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
            </tr>
            </thead>
            <tbody>
            { props.workOrders.map( workOrder => {
                return (
                    <tr key={workOrder.id}>
                        <td>
                            {text(workOrder)}
                        </td>
                        <td>
                            {workOrder.request.asset}
                            <br/><span className="text-success">{workOrder.technicianEmail}</span>
                        </td>
                        <td>{workOrder.description}</td>
                        <td>{workOrder.status}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default ManagerWorkOrderList;