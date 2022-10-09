import React from "react";


function AnnouncementList(props) {
    return (
        <table className="table">
            <thead>
            <tr>
                <th>&nbsp;</th>
                <th>Message</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody>
            { props.announcements.map( announcement => {
                return (
                    <tr key={announcement.id}>
                        <td>
                            {
                                props.deleteAnnouncement &&
                                <button className="btn btn-outline-danger"
                                        onClick={() => props.deleteAnnouncement(announcement.id)}
                                >
                                    Delete
                                </button>
                            }
                        </td>
                        <td>
                            {announcement.message}
                        </td>
                        <td>{announcement.createdDateTime}</td>
                        <td></td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}



export default AnnouncementList;