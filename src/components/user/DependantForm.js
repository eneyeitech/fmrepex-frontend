import React from "react";
import TextInput from "../common/TextInput";

function DependantForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="fullName"
                label="Full name"
                onChange={props.onChange}
                name="name"
                className="form-control"
                value={props.user.name}
                error={props.errors.name}
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
                id="phoneNumber"
                label="Phone number"
                onChange={props.onChange}
                name="phone"
                value={props.user.phone}
                error={props.errors.phone}
            />

            <TextInput
                id="password"
                label="Password"
                onChange={props.onChange}
                name="pass"
                value={props.user.pass}
                error={props.errors.pass}
            />

            <input type="submit" value="Save" className="btn btn-primary mt-2" />
        </form>
    );
}


export default DependantForm;
