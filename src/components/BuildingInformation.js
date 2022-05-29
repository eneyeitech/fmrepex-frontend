import React, { useState, useEffect } from "react";
import {getTenantBuildings, unAssignTenantToBuilding} from "../api/buildingApi";
import {toast} from "react-toastify";

function BuildingInformation(props) {

    const [building, setBuilding] = useState({
        name: "",
        address: "",
        state: "",
    });


    useEffect(() => {
        const uid = props.uid;
        if(uid){
            getTenantBuildings(uid).then(response => {
                console.log(response);
                if(response[0]){
                    setBuilding(response[0]);
                }

                toast.success("Building retrieved");
            });
        }

    }, [props.uid]);

    if(building.name){
        return (
            <>
                <h3 className="pt-md-5">Building Detail</h3>
                <p>Name: {building.name}</p>
                <p>Address: {building.address}</p>
                <p>State: {building.state}</p>

            </>
        );
    }else{
        return (
            <>
                <h3 className="pt-md-2">No building information</h3>

            </>
        );
    }


}



export default BuildingInformation;