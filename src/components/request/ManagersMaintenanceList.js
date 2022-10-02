import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function ManagersMaintenanceList(props) {
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
            { props.maintenances.map( maintenance => {
                return (
                    <tr key={maintenance.id}>
                        <td>
                            <Link to={{
                                pathname: "/request/detail/" + maintenance.id,
                                state: {
                                    buildingId: props.bid,
                                },
                            }}>View</Link>
                        </td>
                        <td>
                            {maintenance.asset}
                            <br/><span className="text-success">Building name</span>
                        </td>
                        <td>{maintenance.description}</td>
                        <td>{maintenance.status}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default ManagersMaintenanceList;