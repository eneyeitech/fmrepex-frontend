import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function TenantList(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Email</th>
            </tr>
            </thead>
            <tbody>
            { props.tenants.map( tenant => {
                return (
                    <tr key={tenant.email}>
                        <td>
                            <Link to={{
                                pathname: "/unassign",
                                state: {
                                    buildingId: tenant.buildingId,
                                    email:tenant.email
                                },}}>Un-assign Tenant</Link>
                        </td>

                        <td>
                            {tenant.fullName}
                        </td>
                        <td>{tenant.email}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default TenantList;