import React from "react";
import { Link } from "react-router-dom";
import {Container} from "reactstrap";

function NotFoundPage() {
    return (
        <Container>
        <div className="pt-md-4">
            <h2>Page Not Found</h2>
            <p>
                <Link to="/">Back to Home</Link>
            </p>
        </div>
        </Container>
    );
}

export default NotFoundPage;