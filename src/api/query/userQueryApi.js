import {handleError, handleResponse} from "../apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function getUsersByManager() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(email, password);
    return fetch(baseUrl + "/api/manager/users", {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}