import {Container} from "reactstrap";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Dashboard(props){

    const {onLogin} = props;
    const location = useLocation();
    const [user, setUser] = useState(); // it is equal to yourData

    useEffect(()=>{
        setUser(location.state);
        onLogin(true);
    }, [location.state])

    const welcome = user ? "Welcome "+user.name + "," : "";

    return (
        <>
            <Container>
                <div className="p-md-5">
                    <h2 className="mb-md-2">Dashboard</h2>
                    {welcome}
                </div>
            </Container>
        </>
    );
}

export default Dashboard