import { Button, Card, CardGroup, CardImg, CardBody, CardSubtitle, CardTitle, CardText, Container } from 'reactstrap';

function ServiceCard(props) {
    const service = props.service;
    return (
        <>
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
        </>
    );
}

export default ServiceCard;