import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import {Container} from "reactstrap";
import { getDependants} from "../../api/query/userQueryApi";
import { unfilteredUsers} from "../../business/usersService";

import TenantUserList from "./TenantUserList";
import ClipLoader from "react-spinners/ClipLoader";

function TenantUsersPage() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect( () => {
        setLoading(true);
        getDependants().then(response => {
            console.log(response);
            setUsers(response);
            setLoading(false);
        });
    }, [])

    const displayedUsers = users ? unfilteredUsers(users) : [];
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
                        <h2 className="pt-md-5">Dependant</h2>
                        <Link className="btn btn-primary" to="/dependant">
                            Add Dependant
                        </Link>
                        <TenantUserList users={displayedUsers}/>
                    </div>
                }
            </Container>
        </>
    );
}


export default TenantUsersPage;
