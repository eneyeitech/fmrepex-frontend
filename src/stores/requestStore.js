import {EventEmitter} from 'events'
import AppDispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT ="change";

let _requests = [];

class  RequestStore extends EventEmitter {

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
//        _requests = [];
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getRequests() {
        return _requests;
    }

    getRequestBySlug(slug) {
        return _requests.find(request => request.id === slug);
    }
}


const store = new RequestStore();
AppDispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.DELETE_REQUEST:
            _requests = _requests.filter(request => request.id !== action.id);
            store.emitChange();
            break;
        case actionTypes.CREATE_REQUEST:
            _requests.push(action.request);
            store.emitChange()
            break;
        case actionTypes.LOAD_REQUESTS_BY_TENANT:
            _requests = action.requests;
            store.emitChange();
            break;
        case actionTypes.LOAD_REQUESTS_BY_MANAGER:
            _requests = action.requests;
            store.emitChange();
            break;
        case actionTypes.LOAD_REQUESTS_BY_DEPENDANT:
            _requests = action.requests;
            store.emitChange();
            break;
        case actionTypes.UPDATE_REQUEST:
            _requests = _requests.map(request => {
                if(request.id==action.request.id) {
                    return action.request;
                }else {
                    return request;
                }
            });
            store.emitChange();
            break;
        default:
            // nothing to do here
    }
})
export default store;

