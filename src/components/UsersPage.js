import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getUsers} from "../api/userApi";
import {modifiedUsers} from "../business/usersService";

function UsersPage() {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        getUsers().then(response => {
            console.log(response);
            setUsers(response);
        });
    }, [])

    const displayedUsers = users ? modifiedUsers(users) : [];
    console.log(displayedUsers);
    return (
        <>
            <Container>
            <h2>Users</h2>
            <Link className="btn btn-primary" to="/user">
                Add User
            </Link>
            <UserList users={displayedUsers}/>
            </Container>
        </>
    );
}


export default UsersPage;
