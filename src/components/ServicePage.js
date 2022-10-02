import React, {useEffect, useState} from "react";
import {services} from "../api/services";
import {Card, CardBody, CardImg, CardTitle, Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import ManageServiceRequest from "./request/ManageServiceRequest";
const _services = services;


const ServicePage = props => {

    const [services, setServices] = useState(_services);

    const [service, setService] = useState({
        id: null,
        name: "",
        img_url: "",
    });

    const location = useLocation();
    const { buildingId } = location.state;

    useEffect(() => {
        const id = props.match.params.id; // from the path `/courses/:slug`

        if (id) {
            let idToCheck = parseInt(id, 10);
            let _service = services.find(s=>s.id===idToCheck);
            setService(_service);
        }
    }, [props.match.params.id, services]);

    return (
        <>
            <Container>
            <h2 className="pt-md-5">Make Service Request</h2>
                <div className="row">
                <Card className="col-3 pt-md-5 text-center ">

                        <CardImg
                            alt="Card image cap"
                            src={`${process.env.PUBLIC_URL}/assets/images/services/${service.img_url}`}
                            top
                            width="100%"
                        />
                        <CardBody>
                            <CardTitle tag="h5">
                                {service.name}
                            </CardTitle>
                        </CardBody>

                </Card>
                <div className="col-9 text-center" >
                    <ManageServiceRequest buildingId={buildingId} service={service.name}/>
                </div>
                </div>
            </Container>
        </>
    );
};

export default ServicePage;