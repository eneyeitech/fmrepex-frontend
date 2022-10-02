import {handleError, handleResponse} from "../apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function getRequestBySlug(slug) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(slug, email, password);
    return fetch(baseUrl + "/api/slug/request?slug=" + slug, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}



export function getRequestsByBuilding(bid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/building/${bid}/request`;
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

export function getRequestsByManager() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/manager/request`;
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

export function getRequestsByTenant() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/tenant/request`;
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
