import {handleError, handleResponse} from "../apiUtils";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function signOffRequest(rid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/dependant/request/${rid}/sign-off`

    console.log(rid, email, password);

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