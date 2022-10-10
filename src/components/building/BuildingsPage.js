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
import ClipLoader from "react-spinners/ClipLoader";


function BuildingsPage() {

    const [buildings, setBuildings] = useState(buildingStore.getBuildings);
    const [loading, setLoading] = useState(false);

    useEffect( () => {

        buildingStore.addChangeListener(onChange);
        if(buildingStore.getBuildings().length === 0) {
            setLoading(true);
            loadBuildings().then(()=>{
                setLoading(false);
            });
        }
        return () => buildingStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setBuildings(buildingStore.getBuildings());
    }

    return (
        <>
            <Container>
                {
                    loading ?
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
                        <h2 className="pt-md-5">Buildings</h2>
                        <Link className="btn btn-primary" to="/building">
                            Add Building
                        </Link>
                        <BuildingList buildings={buildings}/>
                    </div>
                }
            </Container>
        </>
    );
}


export default BuildingsPage;
