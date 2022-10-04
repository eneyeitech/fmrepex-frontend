import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import BuildingInformation from "../building/BuildingInformation";

function TenantDashboard(props){

    const [user, setUser] = useState({
        fullName: "",
        email: "",
    });

    useEffect(() => {
        const user = props.user;
        if(user){
            setUser(user)
        }

    }, [props.user]);
    return (
        <>
            <Link to="/tenant/users">Manage Dependants</Link>

            <BuildingInformation bid={props.loggedInUser.buildingId}/>
        </>
    );
}

export default TenantDashboard