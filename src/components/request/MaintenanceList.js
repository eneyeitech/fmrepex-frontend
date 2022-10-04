import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function MaintenanceList(props) {
    const handleRequest = (m) => {
        if(m) {
            props.onClick(m);
        }
    }

    const completed = (m) => {
        if(m.status){
            if(m.status === "COMPLETED" && !m.signedOff){
                return true;
            }
        }
        return false;
    }

    const signedOff = (m) => {
        if(m.signedOff){
            if(m.signedOff){
                return true;
            }
        }
        return false;
    }

    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Description</th>
                <th>Status</th>
                <th>Created Date</th>
            </tr>
            </thead>
            <tbody>
            { props.maintenances.map( maintenance => {
                return (
                    <tr key={maintenance.id}>
                        <td>
                            <Link to={{
                                pathname: "/request/" + maintenance.id,
                                state: {
                                    buildingId: props.bid,
                                },
                            }}>Edit</Link>
                        </td>
                        <td>
                            {
                                completed(maintenance) &&
                                <button onClick={() => {handleRequest(maintenance)}} className="btn btn-outline-dark">Sign-Off</button>
                            }
                        </td>
                        <td>
                            {maintenance.asset}
                        </td>
                        <td>{maintenance.description}</td>
                        <td>{maintenance.status}{signedOff(maintenance) && "|Signed-Off"}</td>
                        <td>{maintenance.createdDateTime && maintenance.createdDateTime}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default MaintenanceList;