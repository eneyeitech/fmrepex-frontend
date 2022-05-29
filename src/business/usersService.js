import userGroups from "./userGroups";



export function isManager(user){
    console.log(user.roles);
    if(!user) {
        return false;
    }

    return user.roles.some(role => {
        if (role === userGroups.ROLE_MANAGER) {
            return true;
        }

        return false;
    });
}

export function isTenant(user){
    if(!user) {
        return false;
    }

    return user.roles.some(role => {
        if (role === userGroups.ROLE_TENANT) {
            return true;
        }

        return false;
    });
}

export function isTechnician(user){
    if(!user) {
        return false;
    }

    return user.roles.some(role => {
        if (role === userGroups.ROLE_TECHNICIAN) {
            return true;
        }

        return false;
    });
}

export function modifiedUsers(users){
    return users.filter(u => !isManager(u)).map(user => {
        return {
            id: user.id,
            name:`${user.name} ${user.lastname}`,
            email: user.email,
            type: isTenant(user)?"Tenant":isTechnician(user)?"Technician":"",
        };
    });
}