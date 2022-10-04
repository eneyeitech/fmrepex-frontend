import {Container} from "reactstrap";
import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function AdministratorDashboard(props){

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



                        <Link to="/admin/users">Manage Users</Link>



        </>
    );
}

export default AdministratorDashboard