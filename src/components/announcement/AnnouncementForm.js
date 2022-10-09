import React from "react";
import TextInput from "../common/TextInput";

function AnnouncementForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <TextInput
                id="message"
                label="Message"
                onChange={props.onChange}
                name="message"
                value={props.announcement.message}
                error={props.errors.message}
            />

            <input type="submit" value="Send" className="btn btn-primary mt-2" />
        </form>
    );
}


export default AnnouncementForm;
