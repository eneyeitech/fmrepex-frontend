import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCompanyId, isManager, isTenant} from "../business/userGroupService";
import ManageCompany from "./ManageCompany";
import BuildingInformation from "./BuildingInformation";

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
    const companyId = getCompanyId(loggedInUser);
    console.log("CID", companyId);

    const msg = aManager ? "Property Manager":"Tenant";



    return (
        <>
            <Container>
                <div className="p-md-5">
                    <h2 className="mb-md-2">Dashboard <span className="text-muted"> ({msg})</span></h2>
                    {welcome}
                    <br/>
                    {
                        aManager && <>
                            <Link to={{
                        pathname: "/company",
                        state: {
                            companyId: companyId,
                        },
                        }}
                        >Manage Company</Link>
                            <br/>
                            <Link to={{
                                pathname: "/buildings",
                            }}
                            >Manage Building</Link>
                        <br/>
                        <Link to="/users">Manage Users</Link>
                            <br/>
                            <Link to="/maintenance">View Maintenance Request</Link>
                        </>

                    }




                    {aTenant && <BuildingInformation uid={loggedInUser.id}/>}

                </div>
            </Container>
        </>
    );
}

export default Dashboard