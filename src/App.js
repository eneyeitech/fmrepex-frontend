import React from "react";

import {Route, Switch, Redirect} from 'react-router-dom';
import Home from "./components/Home";
import ServiceList from "./components/ServiceList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container} from "reactstrap";
import App1 from "./App1";
import NotFoundPage from "./components/NotFoundPage";
import './css/main.css'
import ServicePage from "./components/ServicePage";
import ManageSignUp from "./components/ManageSignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
  /**function getPage(){
        const route = window.location.pathname;
        if(route === "/courses") return <CoursesPage />;
        if(route === "/about") return <AboutPage />;
        return <HomePage />;
    }*/

  return (
          <body data-new-gr-c-s-check-loaded="14.1058.0" data-gr-ext-installed="">
          <ToastContainer autoClose={3000} hideProgressBar />
          <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={ServiceList} />
          <Route path="/service/:id" component={ServicePage} />
          <Route path="/about" component={App1} />
            <Route path="/signup" component={ManageSignUp} />
          <Redirect from="/about-page" to="about" />
          <Route component={NotFoundPage} />
        </Switch>

          <Footer/>
          </body>
  );
}

export default App;