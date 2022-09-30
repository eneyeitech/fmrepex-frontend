import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function AdministratorDashboard(props){

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

                    <br/>
                    <>

                        <Link to="/users">Manage Users</Link>

                    </>


                </div>
            </Container>
        </>
    );
}

export default AdministratorDashboard