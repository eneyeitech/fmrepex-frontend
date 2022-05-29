import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function BuildingList(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Address</th>
                <th>State</th>
            </tr>
            </thead>
            <tbody>
            { props.buildings.map( building => {
                return (
                    <tr key={building.id}>
                        <td>

                        </td>
                        <td>
                            <Link to={"/building/" + building.id}>{building.name}</Link>
                        </td>
                        <td>{building.address}</td>
                        <td>{building.state}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default BuildingList;