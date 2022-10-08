import React, { useState, useEffect } from "react";

import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import Home from "./components/home/Home";
import ServiceList from "./components/ServiceList";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {Container} from "reactstrap";
import App1 from "./App1";
import NotFoundPage from "./components/NotFoundPage";
import './css/main.css'
import ServicePage from "./components/ServicePage";
import ManageSignUp from "./components/authentication/ManageSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageLogin from "./components/authentication/ManageLogin";
import Dashboard from "./components/Dashboard";
import ManageCompany from "./components/ManageCompany";
import UsersPage from "./components/user/UsersPage";
import ManageUserPage from "./components/user/ManageUserPage";
import BuildingsPage from "./components/building/BuildingsPage";
import ManageBuilding from "./components/building/ManageBuilding";
import TenantAssignment from "./components/tenant/TenantAssignment";
import TenantUnAssignment from "./components/tenant/TenantUnAssignment";
import MaintenanceRequestsPage from "./components/request/MaintenanceRequestsPage";
import ManageMaintenanceRequest from "./components/request/ManageMaintenanceRequest";
import ManagersMaintenancePage from "./components/request/ManagersMaintenancePage";
import MaintenanceRequestDetail from "./components/request/MaintenanceRequestDetail";
import AboutServiceList from "./components/AboutServiceList";
import AboutServicePage from "./components/AboutServicePage";
import TechnicianWorkOrderPage from "./components/workOrder/TechnicianWorkOrderPage";
import AdminUsersPage from "./components/user/AdminUsersPage";
import ManagerWorkOrderPage from "./components/workOrder/ManagerWorkOrderPage";
import TenantUsersPage from "./components/user/TenantUsersPage";
import ManageDependant from "./components/user/ManageDependant";
import DependantMaintenanceRequestsPage from "./components/request/DependantMaintenanceRequestsPage";



function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const history = useHistory();

    function handleLogin(value){
        setLoggedIn(value);
    }

    function handleSignOut(value){
        setLoggedIn(value);
        localStorage.removeItem('USROBJ');
        localStorage.removeItem('PSSWD');
        history.push('/');
    }

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('USROBJ'));
        console.log(user);
        console.log(localStorage.getItem('PSSWD'));
        if(user){
            setLoggedIn(true);
        }
    }, [loggedIn])


  return (
          <body data-new-gr-c-s-check-loaded="14.1058.0" data-gr-ext-installed="">
          <ToastContainer autoClose={3000} hideProgressBar />

          <Header isLoggedIn={loggedIn} signOut={handleSignOut}/>
        <Switch>
          <Route path="/" exact component={Home} />
            <Route path="/services/request" component={ServiceList} />
          <Route path="/services" component={AboutServiceList} />
            <Route path="/service/request/:id" component={ServicePage} />
          <Route path="/service/:id" component={AboutServicePage} />
          <Route path="/about" component={App1} />
            <Route path="/signup" component={ManageSignUp} />
            <Route path="/login" component={ManageLogin} />
            <Route path="/buildings" component={BuildingsPage} />
            <Route path="/building/:slug" component={ManageBuilding} />
            <Route path="/building" component={ManageBuilding} />
            <Route path="/maintenance" component={ManagersMaintenancePage} />
            <Route path="/work-order" component={TechnicianWorkOrderPage} />
            <Route path="/manager/work-order" component={ManagerWorkOrderPage} />
            <Route path="/requests" component={MaintenanceRequestsPage} />
            <Route path="/dependant/requests" component={DependantMaintenanceRequestsPage} />
            <Route path="/request/detail/:slug" component={MaintenanceRequestDetail} />
            <Route path="/request/:slug" component={ManageMaintenanceRequest} />
            <Route path="/request" component={ManageMaintenanceRequest} />
            <Route path="/users" component={UsersPage} />
            <Route path="/admin/users" component={AdminUsersPage} />
            <Route path="/tenant/users" component={TenantUsersPage} />
            <Route path="/assign" component={TenantAssignment} />
            <Route path="/unassign" component={TenantUnAssignment} />
            <Route path="/user/:slug" component={ManageUserPage} />
            <Route path="/user" component={ManageUserPage} />
            <Route path="/dependant" component={ManageDependant} />
            <Route path="/company" component={ManageCompany} />
            <Route path="/dashboard"><Dashboard onLogin={handleLogin}/></Route>
          <Redirect from="/about-page" to="about" />
          <Route component={NotFoundPage} />
        </Switch>

          <Footer/>
          </body>
  );
}

export default App;