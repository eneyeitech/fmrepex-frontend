import React, {useEffect, useState} from "react";
import {services} from "../api/services";
const _services = services;


const ServicePage = props => {

    const [services, setServices] = useState(_services);

    const [service, setService] = useState({
        id: null,
        name: "",
        img_url: "",

    });

    useEffect(() => {
        const id = props.match.params.id; // from the path `/courses/:slug`
        if (id) {
            let _service = services.find(s=>s.id===id);
            setService(_service);
        }
    }, [props.match.params.id, services]);

    return (
        <>
            <div>
            <h2>Service Request</h2>
            {service.name}
            </div>
        </>
    );
};

export default ServicePage;