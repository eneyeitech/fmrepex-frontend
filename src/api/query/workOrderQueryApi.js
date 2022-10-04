import {handleError, handleResponse} from "../apiUtils";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function getWorkOrdersByTechnician() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/technician/work-order`;
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

export function getWorkOrdersByManager() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/manager/work-order`;
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

