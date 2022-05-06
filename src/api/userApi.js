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
    return fetch(baseUrl + (user.id || "/api/auth/signup?type="), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
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
