import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getAllUsers, getDependants} from "../../api/query/userQueryApi";
import {modifiedUsers, unfilteredUsers} from "../../business/usersService";
import * as adminAPi from "../../api/command/adminCommandApi";
import AdminUserList from "./AdminUserList";
import TenantUserList from "./TenantUserList";

function TenantUsersPage() {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        getDependants().then(response => {
            console.log(response);
            setUsers(response);
        });
    }, [])

    const displayedUsers = users ? unfilteredUsers(users) : [];
    console.log(displayedUsers);

    return (
        <>
            <Container>
                <div className="p-md-5">
            <h2 className="pt-md-5">Dependant</h2>
            <Link className="btn btn-primary" to="/dependant">
                Add Dependant
            </Link>
            <TenantUserList users={displayedUsers} />
                </div>
            </Container>
        </>
    );
}


export default TenantUsersPage;
