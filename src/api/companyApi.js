import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
//const baseUrl = process.env.REACT_APP_DEV_API_URL;
const baseUrl = process.env.REACT_APP_API_URL;
//const baseUrl = "http://localhost:8080";

const url = new URL('http://localhost:8080/api/auth/signup');

export function saveCompany(company) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(company, email, password);
    return fetch(baseUrl + "/api/company/new", {
        method: company.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(company)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getCompanyBySlug(slug) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(slug, email, password);
    return fetch(baseUrl + "/api/company?slug=" + slug, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}

