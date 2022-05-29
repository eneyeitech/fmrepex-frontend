import React from "react";
import TextInput from "./common/TextInput";

function UserForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <div className="form-group">
                <label htmlFor="type">Type</label>
                <div className="field">
                    <select
                        id="type"
                        onChange={props.onChange}
                        name="type"
                        value={props.user.type || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="tenant">Tenant</option>
                        <option value="technician">Technician</option>
                    </select>
                </div>
                {props.errors.type && (
                    <div className="alert alert-danger">{props.errors.type}</div>
                )}
            </div>

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

            <input type="submit" value="Save" className="btn btn-primary mt-2" />
        </form>
    );
}


export default UserForm;
