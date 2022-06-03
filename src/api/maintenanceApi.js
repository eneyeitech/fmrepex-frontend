import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function saveMaintenance(maintenance, bid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/building/${bid}/maintenance`;
    console.log(maintenance, email, password);
    return fetch(baseUrl + path, {
        method: maintenance.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(maintenance)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getMaintenanceBySlug(slug) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(slug, email, password);
    return fetch(baseUrl + "/api/maintenance?slug=" + slug, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}



export function getMaintenances(bid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/building/${bid}/maintenance`;
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

export function getManagerMaintenances() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/maintenances`;
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
