import {UserApi} from '../../api/UserApi';

export const ACTION_CREATE_USER = 'ACTION_CREATE_USER';
export const ACTION_DELETE_USER = 'ACTION_DELETE_USER';
export const ACTION_UPDATE_USER = 'ACTION_UPDATE_USER';
export const ACTION_CREATE_EDIT = 'ACTION_CREATE_EDIT';
export const ACTION_SET_LIST = 'ACTION_SET_LIST';


export function fetchUserList() {
    return (dispatch) => {
        UserApi.getList()
            .then((list) => {
                dispatch(setUserList(list));
            });
    };
}
export function fetchOneUser(id) {
    return (dispatch) => {
        UserApi.getOne(id).then((user) => {
            dispatch(createEditUser(user));
        });
    };
}
export function deleteUser(user) {
    return (dispatch) => {
        UserApi.delete(user.id)
            .then(() => {
                dispatch(remove(user));
            });
    };
}


export function save(user) {
    return (dispatch) => {
        if (user.id) {
            UserApi.update(user.id, user)
                .then((user) => {
                    dispatch(updateUser(user));
                });
        } else {
            UserApi.create(user)
                .then((user) => {
                    dispatch(createUser(user));
                });
        }
    };
}

export function createUser(user) {
    return {type: ACTION_CREATE_USER, payload: user};
}

export function updateUser(user) {
    return {type: ACTION_UPDATE_USER, payload: user};
}

export function remove(user) {
    return {type: ACTION_DELETE_USER, payload: user};
}

export function setUserList(serverList) {
    return {type: ACTION_SET_LIST, payload: serverList};
}

export function createEditUser(user) {
    return {type: ACTION_CREATE_EDIT, payload: user};
}