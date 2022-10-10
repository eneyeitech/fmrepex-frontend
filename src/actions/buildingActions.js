import dispatcher from "../appDispatcher";

import * as managerApi from '../api/command/managerApi';
import * as buildingApi from '../api/query/buildingQueryApi';
import actionTypes from "./actionTypes";

export function addBuilding(building) {
    return managerApi.saveBuilding(building).then(savedBuilding => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: building.id ? actionTypes.UPDATE_BUILDING : actionTypes.CREATE_BUILDING,
            building: savedBuilding
        });
    });
}

export function loadBuildings(){
    return buildingApi.getBuildings().then(buildings => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_BUILDINGS,
            buildings
        });
    });
}


export function deleteBuilding(id){
    return managerApi.deleteBuilding(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_BUILDING,
            id: id
        });
    });
}