import Header from "./common/Header";
import Footer from "./common/Footer";
import '../css/main.css';
import Home from "./Home";
import ServiceCard from "./ServiceCard";
import {services} from "../api/services";
import ServiceList from "./ServiceList";

const _services = services;

function Main(props) {

    return(
        <body data-new-gr-c-s-check-loaded="14.1058.0" data-gr-ext-installed="">
            <Header/>
                <ServiceList services={_services}/>
            <Footer/>

        </body>
    )
}

export default Main;