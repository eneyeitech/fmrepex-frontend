import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function DependantDashboard(props){

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
                pathname: "/dependant/requests",
                state: {
                    id:"id",
                },
            }}
            >Requests</Link>
        </>
    );
}

export default DependantDashboard