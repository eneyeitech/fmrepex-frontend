import React from "react";
import TextInput from "./common/TextInput";

function MaintenanceForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="name"
                label="Name"
                onChange={props.onChange}
                name="name"
                className="form-control"
                value={props.maintenance.name}
                error={props.errors.name}
            />

            <TextInput
                id="description"
                label="Description"
                onChange={props.onChange}
                name="description"
                value={props.maintenance.description}
                error={props.errors.address}
            />

            <input type="submit" value="Request" className="btn btn-primary mt-2" />
        </form>
    );
}


export default MaintenanceForm;
