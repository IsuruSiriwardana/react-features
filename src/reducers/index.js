import { ADD_USER, CHANGE_USER_NAME, RECEIVE_MOVIE } from "../constants";

const initialState = {
    users: [],
    userName: ""
}

function rootReducer(state = initialState, action) {
    if(action.type === ADD_USER) {
        return Object.assign({}, state, {
            users: state.users.concat(action.user)
        });
    }
    if(action.type === CHANGE_USER_NAME) {
        return Object.assign({}, state, {
            userName: action.userName
        });
    }
    if(action.type === RECEIVE_MOVIE) {
        return Object.assign({}, state, {
            userName: action.writer
        });
    }
    return state;
}

export {
    rootReducer,
};