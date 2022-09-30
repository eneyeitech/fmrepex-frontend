import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getTenantBuildings} from "../../api/buildingApi";

function ManagerDashboard(props){

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
            <Container>
                <div className="p-md-5">
                    <h2 className="mb-md-2">Dashboard <span className="text-muted"> (Manager)</span></h2>
                    Welcome {user.fullName}
                    <br/>
                    <>

                        <Link to={{
                            pathname: "/buildings",
                            state: {
                                id:"id",
                            },
                        }}
                        >Manage Building</Link>
                        <br/>
                        <Link to="/users">Manage Users</Link>
                        <br/>
                        <Link to="/maintenance">View Maintenance Request</Link>
                        <br/>
                        <Link to={{
                            pathname: "/work-order",
                            state: {
                                id:"id",
                            },
                        }}
                        >Manage Work Orders</Link>
                        <br/>
                    </>



                </div>
            </Container>
        </>
    );
}

export default ManagerDashboard