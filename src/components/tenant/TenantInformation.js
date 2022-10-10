import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import {getTenantsByBuilding} from "../../api/query/userQueryApi"
import TenantList from "./TenantList";
import ClipLoader from "react-spinners/ClipLoader";

function TenantInformation(props) {

    const [tenants, setTenants] = useState([]);
    const [loading, setLoading] = useState(false);
    const {building} = props;

    useEffect(() => {
        const _id = props.building.id;
        setLoading(true);
        getTenantsByBuilding(_id).then(response => {
            console.log(response);
            setTenants(response);
            setLoading(false);
        });
    }, [props.building.id]);


        return (
            <>
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
                    <div>

                        <h3 className="pt-md-2">Tenant Detail</h3>
                        <p>No tenant assigned</p>
                        <Link to={{
                            pathname: "/assign",
                            state: {
                                buildingId: building.id,
                            },
                        }}>Assign Tenant</Link>

                        <TenantList tenants={tenants}/>
                    </div>
                }
            </>
        );



}



export default TenantInformation;