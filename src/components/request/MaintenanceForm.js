import React from "react";
import TextInput from "../common/TextInput";

function MaintenanceForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="asset"
                label="Asset"
                onChange={props.onChange}
                name="asset"
                className="form-control"
                value={props.maintenance.asset}
                error={props.errors.asset}
            />

            <div className="form-group">
                <label htmlFor="category">Category</label>
                <div className="field">
                    <select
                        id="category"
                        onChange={props.onChange}
                        name="category"
                        value={props.maintenance.category || ""}
                        className="form-control"
                    >
                        <option value="" />
                        <option value="GENERAL">General</option>

                    </select>
                </div>
                {props.errors.category && (
                    <div className="alert alert-danger">{props.errors.category}</div>
                )}
            </div>

            <TextInput
                id="description"
                label="Description"
                onChange={props.onChange}
                name="description"
                value={props.maintenance.description}
                error={props.errors.description}
            />

            <input type="submit" value="Request" className="btn btn-primary mt-2" />
        </form>
    );
}


export default MaintenanceForm;
