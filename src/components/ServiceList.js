import React, {useState} from "react";
import {Container} from "reactstrap";
import ServiceCard from "./ServiceCard";

import {services} from "../api/services";
import {useLocation} from "react-router-dom";

const _services = services;

function ServiceList(props){

    const [services, setServices] = useState(_services);

    const location = useLocation();
    const { buildingId } = location.state;

    const serviceList = services.map(service => <ServiceCard service={service} key={service.id} bid={buildingId}/>);


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