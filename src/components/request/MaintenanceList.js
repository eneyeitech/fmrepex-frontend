import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function MaintenanceList(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
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
                                pathname: "/request/" + maintenance.id,
                                state: {
                                    buildingId: props.bid,
                                },
                            }}>Edit</Link>
                        </td>
                        <td><Link to={{
                            pathname: "/request/detail/" + maintenance.id,
                            state: {
                                buildingId: props.bid,
                            },
                        }}>View</Link></td>
                        <td>
                            {maintenance.asset}
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



export default MaintenanceList;