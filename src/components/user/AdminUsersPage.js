import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getAllUsers} from "../../api/query/userQueryApi";
import {modifiedUsers, unfilteredUsers} from "../../business/usersService";
import * as adminAPi from "../../api/command/adminCommandApi";
import AdminUserList from "./AdminUserList";

function AdminUsersPage() {

    const [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(false);

    useEffect( () => {
        getAllUsers().then(response => {
            console.log(response);
            setUsers(response);
        });
    }, [changed])

    const displayedUsers = users ? unfilteredUsers(users) : [];
    console.log(displayedUsers);

    const handleVerify = (u) => {
        //console.log("1-Mango Apple", e);
       if(u.email && !u.verified){
            verifyUser(u.email);
       }
    }

    const handleApprove = (u) => {
        if(u.email && !u.approved){
            approveUser(u.email);
        }
    }

    const approveUser = (email) => {
        adminAPi.approveUser(email).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });
    }

    const verifyUser = (email) => {
        adminAPi.verifyUser(email).then(response=>{
            console.log(response);
            setChanged(!changed)
        }).catch(r=>{
            console.log("Error", r)
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
            <h2 className="pt-md-5">Users</h2>
            <Link className="btn btn-primary" to="/user">
                Add User
            </Link>
            <AdminUserList users={displayedUsers} onVerify={handleVerify} onApprove={handleApprove}/>
                </div>
            </Container>
        </>
    );
}


export default AdminUsersPage;
