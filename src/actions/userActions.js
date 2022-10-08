import dispatcher from "../appDispatcher";

import * as managerApi from '../api/command/managerApi';
import * as tenantApi from '../api/command/tenantApi';
import * as userQueryApi from '../api/query/userQueryApi';
import actionTypes from "./actionTypes";

export function saveManager(user) {
    return managerApi.managerSignUp(user).then(savedManager => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_MANAGER,
            user: savedManager
        });
    });
}

export function addTenantOrTechnician(user) {
    return managerApi.addUser(user).then(addedUser => {
        // Hey dispatcher, go tell all the stores that a tenant or technician was just created.
        console.log(addedUser);
        dispatcher.dispatch({
            actionType: user.id ? actionTypes.UPDATE_USER : actionTypes.CREATE_TENANT_OR_TECHNICIAN,
            user: addedUser
        });
    });
}

export function addDependant(user) {
    return tenantApi.addDependant(user).then(addedDependant => {
        // Hey dispatcher, go tell all the stores that a tenant or technician was just created.
        dispatcher.dispatch({
            actionType: actionTypes.CREATE_DEPENDANT,
            user: addedDependant
        });
    });
}

export function loadTenantsAndTechnicians(){
    return userQueryApi.getUsersByManager().then(users => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_TENANTS_AND_TECHNICIANS,
            users
        });
    });
}

export function deleteUser(email){
    return tenantApi.deleteUser(email).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_USER,
            email: email
        });
    });
}