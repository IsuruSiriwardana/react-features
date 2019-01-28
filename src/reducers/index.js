import { ADD_USER, CHANGE_USER_NAME, RECEIVE_MOVIE, REMOVE_MOVIE, CHANGE_SELECTED_MOVIE } from "../constants";

const initialState = {
    users: [],
    userName: "",
    movies: [],
    selectedMovie: null,
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

        var matchIndex =  -1; 
        if(state.movies.length > 0 ){
            matchIndex = state.movies.map(movie => movie.movieName).indexOf(action.movieName);
        }
        if(matchIndex <0) {
            return Object.assign({}, state, {
                movies: state.movies.concat(movie)
            });
        }
    }
    if(action.type === REMOVE_MOVIE) {
        const index = state.movies.map(movie => movie.movieName).indexOf(action.movieName);
        const moviesNew = [
            ...state.movies.slice(0, index),
            ...state.movies.slice(index+1)
        ];
        return Object.assign({}, state, {
            movies: moviesNew
        });
    }
    if(action.type === CHANGE_SELECTED_MOVIE) {
        return Object.assign({}, state, {
            selectedMovie: action.selectedMovie
        });
    }
    return state;
}

export {
    rootReducer,
};