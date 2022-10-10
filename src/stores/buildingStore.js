import {EventEmitter} from 'events'
import AppDispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT ="change";

let _buildings = [];

class  BuildingStore extends EventEmitter {

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
//        _buildings = [];
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getBuildings() {
        return _buildings;
    }

    getBuildingBySlug(slug) {
        return _buildings.find(building => building.id === slug);
    }
}


const store = new BuildingStore();
AppDispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.DELETE_BUILDING:
            _buildings = _buildings.filter(building => building.id !== action.id);
            store.emitChange();
            break;
        case actionTypes.CREATE_BUILDING:
            _buildings.push(action.building);
            store.emitChange()
            break;
        case actionTypes.LOAD_BUILDINGS:
            _buildings = action.buildings;
            store.emitChange();
            break;
        case actionTypes.UPDATE_BUILDING:
            _buildings = _buildings.map(building => building.id !== action.id);
            store.emitChange();
            break;
        default:
            // nothing to do here
    }
})
export default store;

