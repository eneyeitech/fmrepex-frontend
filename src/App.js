import React, { useState, useEffect } from "react";

import {Route, Switch, Redirect, useHistory} from 'react-router-dom';
import Home from "./components/Home";
import ServiceList from "./components/ServiceList";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import {Container} from "reactstrap";
import App1 from "./App1";
import NotFoundPage from "./components/NotFoundPage";
import './css/main.css'
import ServicePage from "./components/ServicePage";
import ManageSignUp from "./components/ManageSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ManageLogin from "./components/ManageLogin";
import Dashboard from "./components/Dashboard";



function App() {
    const [loggedIn, setLoggedIn] = useState(false);

    function handleLogin(value){
        setLoggedIn(value);
    }

    function handleSignOut(value){
        setLoggedIn(value);
        localStorage.removeItem('USROBJ');
        localStorage.removeItem('PSSWD');
    }

    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('USROBJ'));
        console.log(user);
        console.log(localStorage.getItem('PSSWD'));
        if(user){
            setLoggedIn(true);
        }
    }, loggedIn)




  return (
          <body data-new-gr-c-s-check-loaded="14.1058.0" data-gr-ext-installed="">
          <ToastContainer autoClose={3000} hideProgressBar />

          <Header isLoggedIn={loggedIn} signOut={handleSignOut}/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={ServiceList} />
          <Route path="/service/:id" component={ServicePage} />
          <Route path="/about" component={App1} />
            <Route path="/signup" component={ManageSignUp} />
            <Route path="/login" component={ManageLogin} />
            <Route path="/dashboard"><Dashboard onLogin={handleLogin}/></Route>
          <Redirect from="/about-page" to="about" />
          <Route component={NotFoundPage} />
        </Switch>

          <Footer/>
          </body>
  );
}

export default App;