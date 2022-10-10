import React, { useState, useEffect, CSSProperties } from "react";

import {Link} from "react-router-dom";
import {Container} from "reactstrap";
import announcementStore from "../../stores/announcementStore";
import {deleteAnnouncement, loadAnnouncements} from "../../actions/announcementActions";
import AnnouncementList from "./AnnouncementList";
import PropagateLoader from "react-spinners/PropagateLoader";
import ClipLoader from "react-spinners/ClipLoader";

function ManagerAnnouncementPage() {

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
                        cssOverride={{display: "block",
                            margin: "0 auto",
                            borderColor: "blue",}}
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                    :
                    <div className="p-md-5">
                        <h2 className="pt-md-5">Announcements</h2>
                        <Link className="btn btn-primary" to="/announcement">
                            Create Announcement
                        </Link>

                        <AnnouncementList announcements={announcements} deleteAnnouncement={deleteAnnouncement}/>

                    </div>
                }
            </Container>
        </>
    );
}


export default ManagerAnnouncementPage;
