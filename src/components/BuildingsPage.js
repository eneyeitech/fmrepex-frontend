import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "./UserList";
import {Container} from "reactstrap";
import {getUsers} from "../api/userApi";
import {modifiedUsers} from "../business/usersService";
import BuildingList from "./BuildingList";
import {getBuildings} from "../api/buildingApi";

function BuildingsPage() {

    const [buildings, setBuildings] = useState([]);

    useEffect( () => {
        getBuildings().then(response => {
            console.log(response);
            setBuildings(response);
        });
    }, [])



    return (
        <>
            <Container>
                <h2>Buildings</h2>
                <Link className="btn btn-primary" to="/building">
                    Add Building
                </Link>
                <BuildingList buildings={buildings}/>
            </Container>
        </>
    );
}


export default BuildingsPage;
