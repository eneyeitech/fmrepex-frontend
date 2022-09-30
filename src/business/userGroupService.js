import userGroups from "./userGroups";

export function isAdministrator(loggedInUser){
    if(!loggedInUser) {
        return false;
    }

    return loggedInUser.userGroups.some(grp => {
        if (grp.code === userGroups.ROLE_ADMINISTRATOR) {
            return true;
        }

        return false;
    });
}

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

export function isTechnician(loggedInUser){
    if(!loggedInUser) {
        return false;
    }

    return loggedInUser.userGroups.some(grp => {
        if (grp.code === userGroups.ROLE_TECHNICIAN) {
            return true;
        }

        return false;
    });
}

export function isDependant(loggedInUser){
    if(!loggedInUser) {
        return false;
    }

    return loggedInUser.userGroups.some(grp => {
        if (grp.code === userGroups.ROLE_DEPENDANT) {
            return true;
        }

        return false;
    });
}

export function getCompanyId(loggedInUser) {
    if(!loggedInUser) {
        return null;
    }

    const {company} = loggedInUser;

    let id = company ? company.id : null;

    return id;
}