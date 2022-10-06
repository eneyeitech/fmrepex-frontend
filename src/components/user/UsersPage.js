import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getUsersByManager} from "../../api/query/userQueryApi";
import {modifiedUsers} from "../../business/usersService";
import userStore from "../../stores/userStore";
import {loadTenantsAndTechnicians} from "../../actions/userActions";

function UsersPage() {

    const [users, setUsers] = useState(userStore.getUsers());

    useEffect( () => {
        /**getUsersByManager().then(response => {
            console.log(response);
            setUsers(response);
        });*/
        userStore.addChangeListener(onChange);
        if(userStore.getUsers().length === 0) loadTenantsAndTechnicians();
        return () => userStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setUsers(userStore.getUsers());
    }

    const displayedUsers = users ? modifiedUsers(users) : [];
    console.log(displayedUsers);
    return (
        <>
            <Container>
                <div className="p-md-5">
            <h2 className="pt-md-5">Users</h2>
            <Link className="btn btn-primary" to="/user">
                Add User
            </Link>
            <UserList users={displayedUsers}/>
                </div>
            </Container>
        </>
    );
}


export default UsersPage;
