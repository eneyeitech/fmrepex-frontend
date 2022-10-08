import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function UserList(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
            </tr>
            </thead>
            <tbody>
            { props.users.map( user => {
                return (
                    <tr key={user.email}>
                        <td>
                            <button className="btn btn-outline-danger"
                                    onClick={() => props.deleteUser(user.email)}
                            >
                                Delete
                            </button>
                        </td>
                        <td>
                            {user.name}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.type}</td>
                        <td></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default UserList;