import React from "react";
import TextInput from "./common/TextInput";

function SignUpForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="name"
                label="Name"
                onChange={props.onChange}
                name="name"
                className="form-control"
                value={props.user.name}
                error={props.errors.name}
            />

            <TextInput
                id="lastname"
                label="Lastname"
                onChange={props.onChange}
                name="lastname"
                value={props.user.lastname}
                error={props.errors.lastname}
            />

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

            <input type="submit" value="Save" className="btn btn-primary" />
        </form>
    );
}


export default SignUpForm;
