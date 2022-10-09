import React, { useState, useEffect } from "react";
import announcementStore from "../../stores/announcementStore";
import {Container} from "reactstrap";
import { toast } from "react-toastify";
import * as announcementActions from "../../actions/announcementActions"
import AnnouncementForm from "./AnnouncementForm";


const ManageAnnouncementPage = props => {
    const [errors, setErrors] = useState({});
    const [announcements, setAnnouncements] = useState(announcementStore.getAnnouncements);
    const [announcement, setAnnouncement] = useState({
        id: null,
        message:"",
    });

    useEffect(() => {
        announcementStore.addChangeListener(onChange);
        const _announcement = props.announcement;
        const slug = props.match.params.slug // from the path `/user/:slug
        console.log("SLUG", slug);
        if(announcements.length ===  0){
            announcementActions.loadAnnouncements();
        }else if (_announcement) {
            setAnnouncement(_announcement);
        } else if(slug) {
            const foundAnnouncement = announcementStore.getAnnouncementBySlug(slug);
            if(foundAnnouncement){
                let id = foundAnnouncement.id;
                let message = foundAnnouncement.message;

                setAnnouncement({...announcement, id, message});
            }
            //setUser(userStore.getUserBySlug(slug));
        }
        return () => announcementStore.removeChangeListener(onChange);
    }, [props.announcement, props.match.params.slug, announcements.length]);

    function onChange(){
        setAnnouncements(announcementStore.getAnnouncements());
    }

    function handleChange({ target }) {
        setAnnouncement({
            ...announcement,
            [target.name]: target.value
        });
    }

    function formIsValid() {
        const _errors = {};

        if (!announcement.message) _errors.message = "Message is required";

        setErrors(_errors);
        // Form is valid if the errors object has no properties
        return Object.keys(_errors).length === 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (!formIsValid()) return;

        announcementActions.sendAnnouncement(announcement).then(() => {
            props.history.push("/manager/announcements");
            toast.success("Announcement sent.");
        });
    }

    return (
        <>
            <Container>
                <div className="p-md-5">
                    <h2 className="pt-md-5">Create Announcement</h2>
                    <AnnouncementForm
                        errors={errors}
                        announcement={announcement}
                        onChange={handleChange}
                        onSubmit={handleSubmit}
                    />
                </div>
            </Container>
        </>
    );
};

export default ManageAnnouncementPage;