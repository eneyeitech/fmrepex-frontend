import React, { useState, useEffect } from "react";

import {Container} from "reactstrap";
import announcementStore from "../../stores/announcementStore";
import {loadAnnouncements} from "../../actions/announcementActions";
import AnnouncementList from "./AnnouncementList";
import ClipLoader from "react-spinners/ClipLoader";

function TenantAnnouncementPage() {

    const [announcements, setAnnouncements] = useState(announcementStore.getAnnouncements());
    const [loading, setLoading] = useState(false);

    useEffect( () => {

        announcementStore.addChangeListener(onChange);
        if(announcementStore.getAnnouncements().length === 0) {
            setLoading(true);
            loadAnnouncements().then(()=>{
                setLoading(false);
            });
        }
        return () => announcementStore.removeChangeListener(onChange); // cleanup on mount
    }, []);

    function onChange(){
        setAnnouncements(announcementStore.getAnnouncements());
    }


    console.log(announcements);
    return (
        <>
            <Container>
                {loading ?
                    <ClipLoader
                        loading={loading}
                        cssOverride={{
                            display: "block",
                            margin: "0 auto",
                            borderColor: "blue",
                        }}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :
                    <div className="p-md-5">
                        <h2 className="pt-md-5">Announcements</h2>
                        <AnnouncementList announcements={announcements}/>
                    </div>
                }
            </Container>
        </>
    );
}


export default TenantAnnouncementPage;
