import React from "react";
import TextInput from "./common/TextInput";

function BuildingForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="name"
                label="Name"
                onChange={props.onChange}
                name="name"
                className="form-control"
                value={props.building.name}
                error={props.errors.name}
            />

                <TextInput
                    id="address"
                    label="Address"
                    onChange={props.onChange}
                    name="address"
                    value={props.building.address}
                    error={props.errors.address}
                />

            <TextInput
                id="state"
                label="State"
                onChange={props.onChange}
                name="state"
                value={props.building.state}
                error={props.errors.state}
            />



            <input type="submit" value="Save" className="btn btn-primary mt-2" />
        </form>
    );
}


export default BuildingForm;
