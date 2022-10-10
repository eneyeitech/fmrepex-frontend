import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getAllUsers} from "../../api/query/userQueryApi";
import {modifiedUsers, unfilteredUsers} from "../../business/usersService";
import * as adminAPi from "../../api/command/adminCommandApi";
import AdminUserList from "./AdminUserList";
import ClipLoader from "react-spinners/ClipLoader";

function AdminUsersPage() {

    const [users, setUsers] = useState([]);
    const [changed, setChanged] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        setLoading(true);
        getAllUsers().then(response => {
            console.log(response);
            setUsers(response);
            setLoading(false);
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
        setLoading(true);
        adminAPi.approveUser(email).then(response=>{
            console.log(response);
            setChanged(!changed)
            setLoading(false);
        }).catch(r=>{
            console.log("Error", r)
            setLoading(false);
        });
    }

    const verifyUser = (email) => {
        setLoading(true);
        adminAPi.verifyUser(email).then(response=>{
            console.log(response);
            setChanged(!changed)
            setLoading(false);
        }).catch(r=>{
            console.log("Error", r);
            setLoading(false);
        });
    }

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
                        <h2 className="pt-md-5">Users</h2>
                        <Link className="btn btn-primary" to="/user">
                            Add User
                        </Link>
                        <AdminUserList users={displayedUsers} onVerify={handleVerify} onApprove={handleApprove}/>
                    </div>
                }
            </Container>
        </>
    );
}


export default AdminUsersPage;
