import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function TenantInformation(props) {

    const [tenant, setTenant] = useState({
        name: "",
        email: "",
        phonenumber: "",
    });

    const {building} = props;

    useEffect(() => {
        const _tenant = props.building.user;
        console.log("Tenant", _tenant === undefined);
        if (_tenant) {
            setTenant(_tenant);
        }
    }, [props.building.user]);

    if(tenant.name){
        return (
            <>
                <h3 className="pt-md-2">Tenant Detail</h3>
                <p>Name: {tenant.name}</p>
                <p>Email: {tenant.email}</p>
                <p>Phone Number: {tenant.phonenumber}</p>
                <Link to={{
                    pathname: "/unassign",
                    state: {
                        buildingId: building.id,
                        email:tenant.email
                    },}}>Unassign Tenant</Link>
            </>
        );
    }else{
        return (
            <>
                <h3 className="pt-md-2">Tenant Detail</h3>
                <p>No tenant assigned</p>
                <Link to={{
                    pathname: "/assign",
                    state: {
                        buildingId: building.id,
                    },}}>Assign Tenant</Link>
            </>
        );
    }


}



export default TenantInformation;