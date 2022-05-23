import userGroups from "./userGroups";

export function isManager(loggedInUser){
    if(!loggedInUser) {
        return false;
    }

    return loggedInUser.userGroups.some(grp => {
        if (grp.code === userGroups.ROLE_MANAGER) {
            return true;
        }

        return false;
    });
}

export function isTenant(loggedInUser){
    if(!loggedInUser) {
        return false;
    }

    return loggedInUser.userGroups.some(grp => {
        if (grp.code === userGroups.ROLE_TENANT) {
            return true;
        }

        return false;
    });
}