import React from "react";
import TextInput from "../common/TextInput";

function LoginForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="email"
                label="Email"
                onChange={props.onChange}
                name="email"
                value={props.user.email}
                error={props.errors.email}
            />

            <TextInput
                id="pass"
                label="Password"
                onChange={props.onChange}
                name="pass"
                value={props.user.pass}
                error={props.errors.pass}
            />

            <input type="submit" value="Login" className="btn btn-primary mt-2" />
        </form>
    );
}


export default LoginForm;
