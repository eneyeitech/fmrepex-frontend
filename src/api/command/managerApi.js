import { handleResponse, handleError } from "./../apiUtils";
//const baseUrl = process.env.REACT_APP_DEV_API_URL;
//const baseUrl = process.env.REACT_APP_API_URL;
//const baseUrl = "http://localhost:8080";
const baseUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_DEV_API_URL;


export function managerSignUp(user) {
    console.log(user);
    return fetch(baseUrl + (user.id || "/api/new/manager"), {
        method: user.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(user)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function addUser(user) {
    let path = "";
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(user, email, password);
    if(user.type){
        switch (user.type){
            case "tenant":
                path = "/api/manager/new/tenant"
                break;
            case "technician":
                path = "/api/manager/new/technician"
                break
        }
    }
    else{
        console.log("Invalid type");
        return ;
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

export function saveBuilding(building) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    console.log(building, email, password);
    return fetch(baseUrl + "/api/manager/new/building", {
        method: building.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(building)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function assignTenantToBuilding(tenant) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/manager/assign/tenant/${tenant.email}/building/${tenant.buildingId}`

    console.log(tenant, email, password);

    return fetch(baseUrl + path, {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(tenant)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function unAssignTenantToBuilding(tenant) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');

    const path = `/api/manager/unassign/tenant/${tenant.email}/building/${tenant.buildingId}`

    console.log(tenant, email, password);
    return fetch(baseUrl + path, {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(tenant)
    })
        .then(handleResponse)
        .catch(handleError);
}

export function createWorkOrder(workOrder) {
    const email = JSON.parse(localStorage.getItem('USROBJ')).email;
    const password = localStorage.getItem('PSSWD');
    const path = `/api/manager/work-order`
    if(!workOrder.requestId){
        console.log("Request id not set");
        return;
    }

    console.log(workOrder, email, password);

    return fetch(baseUrl + path, {
        method: "POST", // POST for create, PUT to update when id already exists.
        headers: {
            "content-type": "application/json",
            'Authorization': 'Basic ' + btoa(`${email}:${password}`)
        },
        body: JSON.stringify(workOrder)
    })
        .then(handleResponse)
        .catch(handleError);
}