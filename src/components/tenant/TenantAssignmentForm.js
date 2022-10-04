import React from "react";
import TextInput from "../common/TextInput";

function TenantAssignmentForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="email"
                label="Email"
                onChange={props.onChange}
                name="email"
                className="form-control"
                value={props.tenant.email}
                error={props.errors.email}
            />

            <TextInput
                id="label"
                label="Flat Label"
                onChange={props.onChange}
                name="label"
                className="form-control"
                value={props.tenant.label}
                error={props.errors.label}
            />

            <input type="submit" value="Assign" className="btn btn-primary mt-2" />
        </form>
    );
}


export default TenantAssignmentForm;
