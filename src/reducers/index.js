import { ADD_USER, CHANGE_USER_NAME, RECEIVE_MOVIE } from "../constants";

const initialState = {
    users: [],
    userName: "",
    movies: [],
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
        const movie = {
            writer: action.writer,
            movieName: action.movieName,
            moviePoster: action.poster,
        };
        return Object.assign({}, state, {
            movies: state.movies.concat(movie)
        });
    }
    return state;
}

export {
    rootReducer,
};