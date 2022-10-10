import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import UserList from "../user/UserList";
import {Container} from "reactstrap";
import {getUsers} from "../../api/userApi";
import {modifiedUsers} from "../../business/usersService";
import BuildingList from "./BuildingList";
import {getBuildings} from "../../api/query/buildingQueryApi";
import userStore from "../../stores/userStore";
import {loadTenantsAndTechnicians} from "../../actions/userActions";
import buildingStore from "../../stores/buildingStore";
import {loadBuildings} from "../../actions/buildingActions";


function BuildingsPage() {

    const [buildings, setBuildings] = useState(buildingStore.getBuildings);

    useEffect( () => {
        buildingStore.addChangeListener(onChange);
        if(buildingStore.getBuildings().length === 0) loadBuildings();
        return () => buildingStore.removeChangeListener(onChange); // cleanup on mount
    }, [])
    function onChange(){
        setBuildings(buildingStore.getBuildings());
    }


    return (
        <>
            <Container>
                <div className="p-md-5">
                <h2 className="pt-md-5">Buildings</h2>
                <Link className="btn btn-primary" to="/building">
                    Add Building
                </Link>
                <BuildingList buildings={buildings}/>
                </div>
            </Container>
        </>
    );
}


export default BuildingsPage;
