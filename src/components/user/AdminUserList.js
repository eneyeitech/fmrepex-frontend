import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';

function AdminUserList(props) {

    const handleApprove = (u) => {
        if(u) {
            props.onApprove(u);
        }
    }

    const handleVerify = (u) => {
        if(u) {
            props.onVerify(u);
        }
    }

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

    const verified = (u) => {
       if(u.verified){
           return true;
       }
       return false;
    }

    const approved = (u) => {
        if(u.approved){
            return true;
        }
        return false;
    }


    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>Email</th>
                <th>Type</th>
                <th></th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            { props.users.map( user => {
                console.log(user);
                return (
                    <tr key={user.email}>
                        <td>

                        </td>
                        <td>
                            {user.name}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.type}</td>
                        <td>
                            {!verified(user) &&
                                <button onClick={() => {handleVerify(user)}} className="btn btn-outline-dark">Verify</button>
                            }
                            {verified(user) && "Verified"}
                        </td>
                        <td>
                            {!approved(user) &&
                                <button onClick={() => {handleApprove(user)}} className="btn btn-outline-dark">Approve</button>
                            }
                            {approved(user) && "Approved"}
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default AdminUserList;