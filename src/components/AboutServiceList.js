import React, {useState} from "react";
import {Container} from "reactstrap";
import ServiceCard from "./ServiceCard";

import {services} from "../api/services";
import {useLocation} from "react-router-dom";
import AboutServiceCard from "./AboutServiceCard";

const _services = services;

function AboutServiceList(props){

    const [services, setServices] = useState(_services);

    const serviceList = services.map(service => <AboutServiceCard service={service} key={service.id}/>);


    return (
        <>
            <Container>
                <div className="row pt-md-5 position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light">
                    {serviceList}
                </div>
            </Container>

        </>
    );

}

export default AboutServiceList;