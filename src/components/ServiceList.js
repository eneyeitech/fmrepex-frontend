import React, {useState} from "react";
import {CardGroup, Container} from "reactstrap";
import ServiceCard from "./ServiceCard";

import {services} from "../api/services";

const _services = services;

function ServiceList(props){

    const [services, setServices] = useState(_services);

    const serviceList = services.map(service => <ServiceCard service={service}/>);


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

export default ServiceList;