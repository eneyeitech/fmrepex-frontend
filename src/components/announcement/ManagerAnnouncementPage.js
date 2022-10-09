import React, { useState, useEffect } from "react";

import {Link} from "react-router-dom";
import {Container} from "reactstrap";
import announcementStore from "../../stores/announcementStore";
import {deleteAnnouncement, loadAnnouncements} from "../../actions/announcementActions";
import AnnouncementList from "./AnnouncementList";

function ManagerAnnouncementPage() {

    const [announcements, setAnnouncements] = useState(announcementStore.getAnnouncements());

    useEffect( () => {

        announcementStore.addChangeListener(onChange);
        if(announcementStore.getAnnouncements().length === 0) loadAnnouncements();
        return () => announcementStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setAnnouncements(announcementStore.getAnnouncements());
    }


    console.log(announcements);
    return (
        <>
            <Container>
                <div className="p-md-5">
                    <h2 className="pt-md-5">Announcements</h2>
                    <Link className="btn btn-primary" to="/announcement">
                        Create Announcement
                    </Link>
                    <AnnouncementList announcements={announcements} deleteAnnouncement={deleteAnnouncement}/>
                </div>
            </Container>
        </>
    );
}


export default ManagerAnnouncementPage;
