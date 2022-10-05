import { handleResponse, handleError } from "./../apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
//const baseUrl = process.env.REACT_APP_DEV_API_URL;
const baseUrl = process.env.REACT_APP_API_URL;
//const baseUrl = "http://localhost:8080";

const url = new URL('http://localhost:8080/api/auth/signup');

export function addDependant(user) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    console.log(user);
    return fetch(baseUrl + (user.id || "/api/tenant/new/dependant"), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function saveRequest(request) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    //const path = `/api/building/${bid}/maintenance`;
    const path = `/api/tenant/new/request`;
    console.log(request, email, password);
    return fetch(baseUrl + path, {
        method: request.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(request)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function signOffRequest(rid) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/tenant/request/${rid}/sign-off`

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


