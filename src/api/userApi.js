import { handleResponse, handleError } from "./apiUtils";
//const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080";
const url = new URL('http://localhost:8080/api/auth/signup');

export function getCourses() {
    return fetch(baseUrl)
        .then(handleResponse)
        .catch(handleError);
}

export function getCourseBySlug(slug) {
    return fetch(baseUrl + "?slug=" + slug)
        .then(response => {
            if (!response.ok) throw new Error("Network response was not ok.");
            return response.json().then(courses => {
                if (courses.length !== 1) throw new Error("Course not found: " + slug);
                return courses[0]; // should only find one course for a given slug, so return it.
            });
        })
        .catch(handleError);
}

export function saveUser(user) {
    let params = {type:""};
    url.search = new URLSearchParams(params).toString();
    //console.log(delete user.id);
    //console.log(user);
    return fetch(baseUrl + (user.id || "/api/auth/signup?type=manager"), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function addUser(user) {
    let params = {type:"manager"};
    let path = "/api/auth/signup?type=manager";
    url.search = new URLSearchParams(params).toString();
    //console.log(delete user.id);
    //console.log(user);
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(user, email, password);
    if(user.type){
        console.log("type is set", user.type);
        path = "/api/user/new?type="+user.type
    }else{
        console.log("type is not set");
    }
    return fetch(baseUrl + (user.id || path), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function loginUser(user) {
    let params = {};
    url.search = new URLSearchParams(params).toString();
    //console.log(delete user.id);
    //console.log(user);
    return fetch(baseUrl + (user.id || "/api/auth/login"), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${user.email}:${user.password}`)
        },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function deleteCourse(courseId) {
    return fetch(baseUrl + courseId, { method: "DELETE" })
        .then(handleResponse)
        .catch(handleError);
}

export function getUserBySlug(slug) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(slug, email, password);
    return fetch(baseUrl + "/api/user?slug=" + slug, {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}

export function getUsers() {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(email, password);
    return fetch(baseUrl + "/api/users", {
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
    })
        .then(handleResponse)
        .catch(handleError);
}
