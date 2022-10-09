import React, { useState, useEffect } from "react";

import {Container} from "reactstrap";
import announcementStore from "../../stores/announcementStore";
import {loadAnnouncements} from "../../actions/announcementActions";
import AnnouncementList from "./AnnouncementList";

function TenantAnnouncementPage() {

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
                    <AnnouncementList announcements={announcements}/>
                </div>
            </Container>
        </>
    );
}


export default TenantAnnouncementPage;
