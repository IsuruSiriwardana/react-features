import {ADD_USER, CHANGE_USER_NAME, REQUEST_MOVIE, RECEIVE_MOVIE} from '../constants/index';

export function addUser(user){
    return { type: ADD_USER, user}
}

export function changeUserName(userName){
    return {type: CHANGE_USER_NAME, userName}
}

function requestMovies(movieName) {
    return {
        type: REQUEST_MOVIE,
        movieName
    }
}

export function receiveMovies(movieName, json) {
    console.log("Received movie: ", json);
    return {
        type: RECEIVE_MOVIE,
        movieName,
        writer: json.Writer,
        receivedAt: Date.now()
    }
}

export function fetchMovieData(movieName){
    return dispatch => {
        dispatch(requestMovies(movieName))
        return fetch(`http://www.omdbapi.com/?t=${movieName}&apikey=BanMePlz`)
            .then(response => response.json())
            .then(json => dispatch(receiveMovies(movieName, json)))
    }
}