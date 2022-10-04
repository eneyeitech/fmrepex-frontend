import {handleError, handleResponse} from "../apiUtils";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function verifyUser(userEmailToVerify) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/auth/${userEmailToVerify}/verify`

    console.log(userEmailToVerify, email, password);

    return fetch(baseUrl + path, {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify({})
    })
        .then(handleResponse)
        .catch(handleError);
}

export function approveUser(userEmailToApprove) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/auth/${userEmailToApprove}/approve`

    console.log(userEmailToApprove, email, password);

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