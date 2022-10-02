import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {getTenantsByBuilding} from "../../api/query/userQueryApi"
import TenantList from "./TenantList";

function TenantInformation(props) {

    const [tenants, setTenants] = useState([]);

    const {building} = props;

    useEffect(() => {
        const _id = props.building.id;
        getTenantsByBuilding(_id).then(response => {
            console.log(response);
            setTenants(response);
        });
    }, [props.building.id]);


        return (
            <>
                <h3 className="pt-md-2">Tenant Detail</h3>
                <p>No tenant assigned</p>
                <Link to={{
                    pathname: "/assign",
                    state: {
                        buildingId: building.id,
                    },}}>Assign Tenant</Link>

                <TenantList tenants={tenants}/>
            </>
        );



}



export default TenantInformation;