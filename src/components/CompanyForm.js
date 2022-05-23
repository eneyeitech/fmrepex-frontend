import React from "react";
import TextInput from "./common/TextInput";

function CompanyForm(props) {
    return (
        <form onSubmit={props.onSubmit}>

            <TextInput
                id="name"
                label="Name"
                onChange={props.onChange}
                name="name"
                className="form-control"
                value={props.company.name}
                error={props.errors.name}
            />

            <TextInput
                id="state"
                label="State"
                onChange={props.onChange}
                name="state"
                value={props.company.state}
                error={props.errors.state}
            />

            <TextInput
                id="town"
                label="Town"
                onChange={props.onChange}
                name="town"
                value={props.company.town}
                error={props.errors.town}
            />

                <TextInput
                    id="street"
                    label="Street"
                    onChange={props.onChange}
                    name="street"
                    value={props.company.street}
                    error={props.errors.street}
                />

            <TextInput
                id="number"
                label="Number"
                onChange={props.onChange}
                name="number"
                value={props.company.number}
                error={props.errors.number}
            />

            <TextInput
                id="cacNumber"
                label="CAC Number"
                onChange={props.onChange}
                name="cacNumber"
                value={props.company.cacNumber}
                error={props.errors.cacNumber}
            />

            <TextInput
                id="officePhoneNumber"
                label="Office Phone Number"
                onChange={props.onChange}
                name="officePhoneNumber"
                value={props.company.officePhoneNumber}
                error={props.errors.officePhoneNumber}
            />


            <input type="submit" value="Save" className="btn btn-primary mt-2" />
        </form>
    );
}


export default CompanyForm;
