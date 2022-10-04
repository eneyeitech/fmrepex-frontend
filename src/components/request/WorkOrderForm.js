import React from "react";
import TextInput from "../common/TextInput";

function WorkOrderForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="email"
                label="Technician Email"
                onChange={props.onChange}
                name="technicianEmail"
                className="form-control"
                value={props.workOrder.technicianEmail}
                error={props.errors.technicianEmail}
            />

            <TextInput
                id="description"
                label="Description"
                onChange={props.onChange}
                name="description"
                className="form-control"
                value={props.workOrder.description}
                error={props.errors.description}
            />

            <input type="submit" value="Create Work Order" className="btn btn-primary mt-2" />
        </form>
    );
}


export default WorkOrderForm;
