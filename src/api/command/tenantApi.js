import { handleResponse, handleError } from "./../apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

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
