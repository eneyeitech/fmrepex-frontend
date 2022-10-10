import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {modifiedUsers} from "../../business/usersService";
import userStore from "../../stores/userStore";
import {loadTenantsAndTechnicians, deleteUser} from "../../actions/userActions";
import ClipLoader from "react-spinners/ClipLoader";

function UsersPage() {

    const [users, setUsers] = useState(userStore.getUsers());
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        /**getUsersByManager().then(response => {
            console.log(response);
            setUsers(response);
        });*/
        userStore.addChangeListener(onChange);
        if(userStore.getUsers().length === 0) {
            setLoading(true);
            loadTenantsAndTechnicians().then(()=>{
                setLoading(false);
            });
        }
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
                        <UserList users={displayedUsers} deleteUser={deleteUser}/>
                    </div>
                }
            </Container>
        </>
    );
}


export default UsersPage;
