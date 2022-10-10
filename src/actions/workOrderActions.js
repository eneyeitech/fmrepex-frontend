import dispatcher from "../appDispatcher";

import * as managerApi from '../api/command/managerApi';
import * as technicianApi from '../api/command/technicianCommandApi';
import * as workOrderApi from '../api/query/workOrderQueryApi';
import actionTypes from "./actionTypes";

export function addWorkOrder(workOrder) {
    return managerApi.createWorkOrder(workOrder).then(savedWorkOrder => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: workOrder.id ? actionTypes.UPDATE_WORK_ORDER : actionTypes.CREATE_WORK_ORDER,
            workOrder: savedWorkOrder
        });
    });
}

export function acceptWorkOrder(id) {
    return technicianApi.acceptWorkOrder(id).then(editedWorkOrder => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: actionTypes.UPDATE_WORK_ORDER,
            workOrder: editedWorkOrder
        });
    });
}

export function completeWorkOrder(id) {
    return technicianApi.completeWorkOrder(id).then(editedWorkOrder => {
        // Hey dispatcher, go tell all the stores that a manager was just created.
        dispatcher.dispatch({
            actionType: actionTypes.UPDATE_WORK_ORDER,
            workOrder: editedWorkOrder
        });
    });
}

export function loadWorkOrdersByTechnician(){
    return workOrderApi.getWorkOrdersByTechnician().then(workOrders => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_WORK_ORDER_BY_TECHNICIAN,
            workOrders
        });
    });
}

export function loadWorkOrdersByManager(){
    return workOrderApi.getWorkOrdersByManager().then(workOrders => {
        dispatcher.dispatch({
            actionType: actionTypes.LOAD_WORK_ORDER_BY_MANAGER,
            workOrders
        });
    });
}

export function deleteWorkOrder(id){
    return managerApi.deleteBuilding(id).then(() => {
        dispatcher.dispatch({
            actionType: actionTypes.DELETE_BUILDING,
            id: id
        });
    });
}