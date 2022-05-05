import {
    Button,
    Card,
    CardGroup,
    CardImg,
    CardBody,
    CardSubtitle,
    CardTitle,
    CardText,
    Container }
    from 'reactstrap';
import {Link} from "react-router-dom";

function ServiceCard(props) {
    const service = props.service;
    return (
        <>

                <Card className="col-3 pt-md-5 text-center ">
                    <Link to={"/service/" + service.id}>
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
                    </Link>
                </Card>

        </>
    );
}

export default ServiceCard;