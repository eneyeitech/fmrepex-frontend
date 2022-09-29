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
                id="password"
                label="Password"
                onChange={props.onChange}
                name="password"
                value={props.user.password}
                error={props.errors.password}
            />

            <input type="submit" value="Login" className="btn btn-primary mt-2" />
        </form>
    );
}


export default LoginForm;
