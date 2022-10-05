import {handleError, handleResponse} from "../apiUtils";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');
const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_DEV_API_URL;

export function login(user) {
    console.log(apiUrl);
    let params = {};
    url.search = new URLSearchParams(params).toString();

    return fetch(baseUrl + (user.id || "/api/auth/signin"), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}
