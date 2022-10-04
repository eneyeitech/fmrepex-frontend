import {handleError, handleResponse} from "../apiUtils";

//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');


export function acceptWorkOrder(wid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/technician/work-order/${wid}/accept`

    console.log(wid, email, password);

    return fetch(baseUrl + path, {
        method: "PUT", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify({})
    })
        .then(handleResponse)
        .catch(handleError);
}

export function completeWorkOrder(wid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/technician/work-order/${wid}/complete`

    console.log(wid, email, password);

    return fetch(baseUrl + path, {
        method: "PUT", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify({})
    })
        .then(handleResponse)
        .catch(handleError);
}