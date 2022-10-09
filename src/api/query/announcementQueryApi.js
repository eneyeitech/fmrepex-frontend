import {handleError, handleResponse} from "../apiUtils";
//const baseUrl = process.env.REACT_APP_DEV_API_URL;
//const baseUrl = process.env.REACT_APP_API_URL;
//const baseUrl = "http://localhost:8080";
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_DEV_API_URL;

export function getAnnouncementBySlug(slug) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(slug, email, password);
    return fetch(baseUrl + "/api/slug/announcement?slug=" + slug, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getAnnouncements() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/announcement`;
    console.log(email, password);
    return fetch(baseUrl + path, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getAnnouncementsByManager() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/manager/announcement`;
    console.log(email, password);
    return fetch(baseUrl + path, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getAnnouncementsByTenant() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/tenant/announcement`;
    console.log(email, password);
    return fetch(baseUrl + path, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}


