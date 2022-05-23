import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {isManager, isTenant} from "../business/userGroupService";
import ManageCompany from "./ManageCompany";

function Dashboard(props){

    const {onLogin} = props;
    const location = useLocation();
    const [user, setUser] = useState(); // it is equal to yourData

    useEffect(()=>{
        //const user = JSON.parse(localStorage.getItem('USROBJ'));

        setUser(location.state);
        onLogin(true);
    }, [location.state])

    const loggedInUser = user ? user : JSON.parse(localStorage.getItem('USROBJ'));

    const welcome = loggedInUser ? "Welcome "+loggedInUser.name + "," : "";

    const aTenant = isTenant(loggedInUser);
    const aManager = isManager(loggedInUser);

    const msg = aManager ? "Property Manager":"Tenant";



    return (
        <>
            <Container>
                <div className="p-md-5">
                    <h2 className="mb-md-2">Dashboard <span className="text-muted"> ({msg})</span></h2>
                    {welcome}
                    <br/>
                    <Link to="/company">Manage Company</Link>
                    <br/>
                    <Link to="/maintenance">View Maintenance Request</Link>

                </div>
            </Container>
        </>
    );
}

export default Dashboard