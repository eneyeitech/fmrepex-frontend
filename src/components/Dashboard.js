import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCompanyId, isAdministrator, isDependant, isManager, isTenant, isTechnician} from "../business/userGroupService";
import ManageCompany from "./ManageCompany";
import BuildingInformation from "./building/BuildingInformation";
import ManagerDashboard from "./dashboard/ManagerDashboard";
import AdministratorDashboard from "./dashboard/AdministratorDashboard";
import TechnicianDashboard from "./dashboard/TechnicianDashboard";
import {getUserLabel} from "../business/usersService";
import TenantDashboard from "./dashboard/TenantDashboard";
import DependantDashboard from "./dashboard/DependantDashboard";


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

    const welcome = loggedInUser ? "Welcome "+loggedInUser.fullName + "," : "";

    const aTenant = isTenant(loggedInUser);
    const aManager = isManager(loggedInUser);
    const aAdmin = isAdministrator(loggedInUser);
    const  aTechnician = isTechnician(loggedInUser);
    const  aDependant = isDependant(loggedInUser);


    const text = getUserLabel(loggedInUser);



    return (
        <>
            <Container>
                <div className="p-md-5">
                    <h2 className="mb-md-2">Dashboard <span className="text-muted"> ({text})</span></h2>
                    {welcome}
                    <br/>


            {aAdmin && <AdministratorDashboard user={loggedInUser}/>}

                    {aManager && <ManagerDashboard user={loggedInUser}/>}

            {aTechnician && <TechnicianDashboard user={loggedInUser}/>}

                    {aTenant && <TenantDashboard loggedInUser={loggedInUser}/>}

                    {aDependant && <DependantDashboard user={loggedInUser}/>}

                </div>
            </Container>
        </>
    );
}

export default Dashboard