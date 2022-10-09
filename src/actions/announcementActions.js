import dispatcher from "../appDispatcher";

import * as managerApi from '../api/command/managerApi';
import * as announcementApi from '../api/query/announcementQueryApi';
import actionTypes from "./actionTypes";

export function sendAnnouncement(announcement) {
    return managerApi.sendAnnouncement(announcement).then(savedAnnouncement => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: announcement.id ? actionTypes.UPDATE_ANNOUNCEMENT : actionTypes.CREATE_ANNOUNCEMENT,
            announcement: savedAnnouncement
        });
    });
}

export function loadAnnouncements(){
    return announcementApi.getAnnouncements().then(announcements => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_ANNOUNCEMENTS,
            announcements
        });
    });
}

export function loadManagersAnnouncement(){
    return announcementApi.getAnnouncementsByManager().then(announcements => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_MANAGER_ANNOUNCEMENTS,
            announcements
        });
    });
}

export function loadTenantsAnnouncement(){
    return announcementApi.getAnnouncementsByTenant().then(announcements => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TENANT_ANNOUNCEMENTS,
            announcements
        });
    });
}

export function deleteAnnouncement(id){
    return managerApi.deleteAnnouncement(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_ANNOUNCEMENT,
            id: id
        });
    });
}