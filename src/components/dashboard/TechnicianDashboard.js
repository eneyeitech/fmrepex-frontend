import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function TechnicianDashboard(props){

    const [user, setUser] = useState({
        fullName: "",
        email: "",
    });

    useEffect(() => {
        const user = props.user;
        if(user){
            setUser(user)
        }

    }, [props.user]);
    return (
        <>

                        <Link to={{
                            pathname: "/work-order",
                            state: {
                                id:"id",
                            },
                        }}
                        >My Work Orders</Link>

        </>
    );
}

export default TechnicianDashboard