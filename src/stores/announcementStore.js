import {EventEmitter} from 'events'
import AppDispatcher from "../appDispatcher";
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT ="change";

let _announcements = [];

class  AnnouncementStore extends EventEmitter {

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
        _announcements = [];
    }

    emitChange(){
        this.emit(CHANGE_EVENT);
    }

    getAnnouncements() {
        return _announcements;
    }

    getAnnouncementBySlug(slug) {
        return _announcements.find(announcement => announcement.id === slug);
    }
}


const store = new AnnouncementStore();
AppDispatcher.register(action => {
    switch (action.actionType) {
        case actionTypes.DELETE_ANNOUNCEMENT:
            _announcements = _announcements.filter(announcement => announcement.id !== action.id);
            store.emitChange();
            break;
        case actionTypes.CREATE_ANNOUNCEMENT:
            _announcements.push(action.announcement);
            store.emitChange()
            break;
        case actionTypes.LOAD_TENANT_ANNOUNCEMENTS:
            _announcements = action.announcements;
            store.emitChange();
            break;
        case actionTypes.LOAD_MANAGER_ANNOUNCEMENTS:
            _announcements = action.announcements;
            store.emitChange();
            break;
        case actionTypes.LOAD_ANNOUNCEMENTS:
            _announcements = action.announcements;
            store.emitChange();
            break;
        default:
            // nothing to do here
    }
})
export default store;

