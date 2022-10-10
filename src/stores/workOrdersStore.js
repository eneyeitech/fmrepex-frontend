import {EventEmitter} from 'events'
import AppDispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT ="change";

let _workOrders = [];

class  WorkOrderStore extends EventEmitter {

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
//        _workOrders = [];
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getWorkOrders() {
        return _workOrders;
    }

    getWorkOrderBySlug(slug) {
        return _workOrders.find(workOrder => workOrder.id === slug);
    }
}


const store = new WorkOrderStore();
AppDispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.DELETE_WORK_ORDER:
            _workOrders = _workOrders.filter(workOrder => workOrder.id !== action.id);
            store.emitChange();
            break;
        case actionTypes.CREATE_WORK_ORDER:
            _workOrders.push(action.workOrder);
            store.emitChange()
            break;
        case actionTypes.LOAD_WORK_ORDER_BY_MANAGER:
            _workOrders = action.workOrders;
            store.emitChange();
            break;
        case actionTypes.LOAD_WORK_ORDER_BY_TECHNICIAN:
            _workOrders = action.workOrders;
            store.emitChange();
            break;
        case actionTypes.UPDATE_WORK_ORDER:
            _workOrders = _workOrders.map(workOrder => {
                if(workOrder.id==action.workOrder.id) {
                    return action.workOrder;
                }else {
                    return workOrder;
                }
            });
            store.emitChange();
            break;
        default:
            // nothing to do here
    }
})
export default store;

