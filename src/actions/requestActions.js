import dispatcher from "../appDispatcher";

import * as managerApi from '../api/command/managerApi';
import * as tenantApi from '../api/command/tenantApi';
import * as dependantApi from '../api/command/dependantApi';
import * as requestApi from '../api/query/requestQueryApi';

import actionTypes from "./actionTypes";

export function addRequest(request) {
    return tenantApi.saveRequest(request).then(savedRequest => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: request.id ? actionTypes.UPDATE_REQUEST : actionTypes.CREATE_REQUEST,
            request: savedRequest
        });
    });
}

export function tenantSignOffRequest(id) {
    return tenantApi.signOffRequest(id).then(editedRequest => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: actionTypes.UPDATE_REQUEST,
            request: editedRequest
        });
    });
}

export function dependantSignOffRequest(id) {
    return dependantApi.signOffRequest(id).then(editedRequest => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: actionTypes.UPDATE_REQUEST,
            request: editedRequest
        });
    });
}

export function loadRequestsByTenant(){
    return requestApi.getRequestsByTenant().then(requests => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_REQUESTS_BY_TENANT,
            requests
        });
    });
}

export function loadRequestsByManager(){
    return requestApi.getRequestsByManager().then(requests => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_REQUESTS_BY_MANAGER,
            requests
        });
    });
}

export function loadRequestsByDependant(){
    return requestApi.getRequestsByDependant().then(requests => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_REQUESTS_BY_DEPENDANT,
            requests
        });
    });
}


export function deleteRequest(id){
    return managerApi.deleteBuilding(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_BUILDING,
            id: id
        });
    });
}