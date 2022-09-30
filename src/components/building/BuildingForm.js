import React, {useState} from "react";
import TextInput from "../common/TextInput";
import NumberInput from "../common/NumberInput";
import {states} from "../../api/states";
import AboutServiceCard from "../AboutServiceCard";

const _states = states;

function BuildingForm(props) {

    const [states, setStates] = useState(_states);

    const stateList = states.map(state => <option value={state}>{state}</option>);

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
            <NumberInput
                id="noofflats"
                label="No of Flats"
                onChange={props.onChange}
                name="noOfFlats"
                className="form-control"
                value={props.building.noOfFlats}
                error={props.errors.noOfFlats}
            />
            <TextInput
                id="houseno"
                label="House No"
                onChange={props.onChange}
                name="houseNo"
                className="form-control"
                value={props.building.houseNo}
                error={props.errors.houseNo}
            />

            <TextInput
                id="streetname"
                label="Street Name"
                onChange={props.onChange}
                name="streetName"
                className="form-control"
                value={props.building.streetName}
                error={props.errors.streetName}
            />

            <TextInput
            id="townname"
            label="Town Name"
            onChange={props.onChange}
            name="townName"
            className="form-control"
            value={props.building.townName}
            error={props.errors.townName}
            />


            <div className="form-group">
                <label htmlFor="state">State</label>
                <div className="field">
                    <select
                        id="state"
                        onChange={props.onChange}
                        name="state"
                        value={props.building.state || ""}
                        className="form-control"
                    >
                        <option value="" />
                        {stateList}

                    </select>
                </div>
                {props.errors.state && (
                    <div className="alert alert-danger">{props.errors.state}</div>
                )}
            </div>



                <TextInput
                    id="longitude"
                    label="Longitude"
                    onChange={props.onChange}
                    name="longitude"
                    value={props.building.longitude}
                    error={props.errors.longitude}
                />

            <TextInput
                id="latitude"
                label="Latitude"
                onChange={props.onChange}
                name="latitude"
                value={props.building.latitude}
                error={props.errors.latitude}
            />



            <input type="submit" value="Save" className="btn btn-primary mt-2" />
        </form>
    );
}


export default BuildingForm;
