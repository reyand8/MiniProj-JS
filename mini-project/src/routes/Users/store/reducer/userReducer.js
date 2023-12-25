import {
    ACTION_CREATE_USER,
    ACTION_DELETE_USER,
    ACTION_UPDATE_USER,
    ACTION_CREATE_EDIT,
    ACTION_SET_LIST,
} from '../actions/index';

export const DEFAULT_DATA = {
    firstName: '',
    lastName: '',
    email: '',
    avatar: '',
};

const initialState = {
    list: [],
    userEdit: DEFAULT_DATA,
};

export default function userReducer(state=initialState, {type, payload} ) {
    switch (type) {
        case ACTION_CREATE_USER: {
            return {
                ...state,
                list: [
                    ...state.list,
                    {...payload},
                ],
            };
        }
        case ACTION_DELETE_USER: {
            const newList = state.list.filter(user => user.id !== payload.id);
            return {...state, list: newList };
        }
        case ACTION_UPDATE_USER: {
            const updateList = state.list.map(user => user.id === payload.id ? payload : user);
            return {...state, list: updateList, userEdit : DEFAULT_DATA };
        }
        case ACTION_CREATE_EDIT: {
            return {...state, userEdit: payload };
        }
        case ACTION_SET_LIST: return { ...state, list: payload };
        default: return state;
    }
}