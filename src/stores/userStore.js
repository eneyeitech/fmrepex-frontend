import {EventEmitter} from 'events'
import AppDispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT ="change";

let _users = [];

class  UserStore extends EventEmitter {

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
        _users = [];
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getUsers() {
        return _users;
    }

    getUserBySlug(slug) {
        return _users.find(user => user.email === slug);
    }
}


const store = new UserStore();
AppDispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.DELETE_USER:
            _users = _users.filter(user => user.email !== action.email);
            store.emitChange();
            break;
        case actionTypes.CREATE_MANAGER:
            _users.push(action.user);
            store.emitChange()
            break;
        case actionTypes.CREATE_TENANT_OR_TECHNICIAN:
            _users.push(action.user);
            store.emitChange();
            break;
        case actionTypes.CREATE_DEPENDANT:
            _users.push(action.user);
            store.emitChange();
            break;
        case actionTypes.LOAD_TENANTS_AND_TECHNICIANS:
            _users = action.users;
            store.emitChange();
            break;
        default:
            // nothing to do here
    }
})
export default store;

