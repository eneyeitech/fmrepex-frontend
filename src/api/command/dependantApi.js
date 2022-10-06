import {handleError, handleResponse} from "../apiUtils";
//const baseUrl = process.env.REACT_APP_DEV_API_URL;
//const baseUrl = process.env.REACT_APP_API_URL;
//const baseUrl = "http://localhost:8080";
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_DEV_API_URL;

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