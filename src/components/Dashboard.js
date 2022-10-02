import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {getCompanyId, isAdministrator, isDependant, isManager, isTenant, isTechnician} from "../business/userGroupService";
import ManageCompany from "./ManageCompany";
import BuildingInformation from "./building/BuildingInformation";
import ManagerDashboard from "./dashboard/ManagerDashboard";
import AdministratorDashboard from "./dashboard/AdministratorDashboard";


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
    //const companyId = getCompanyId(loggedInUser);
    //console.log("CID", companyId);

    const msg = aManager ? "Property Manager":"Tenant";



    return (
        <>


            {aAdmin && <AdministratorDashboard user={loggedInUser}/>}

                    {aManager && <ManagerDashboard user={loggedInUser}/>}

                    {aTenant && <BuildingInformation bid={loggedInUser.buildingId}/>}


        </>
    );
}

export default Dashboard