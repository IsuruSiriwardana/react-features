import { connect } from 'react-redux';
import {
    changeUserName,
    fetchMovieData,
    removeMovie,
    changeSelectedMovie,
} from '../../actions/index';
import MainPage from './MainPage';

const mapStateToProps = state => {
    return {
        users: state.users,
        userName: state.userName,
        movies: state.movies,
    };
    
};

const mapDispatchToProps = dispatch => ({
    onUserNameChanged: userName => {
        dispatch(changeUserName(userName));
    },
    onUserSubmitted: user => {
        dispatch(fetchMovieData(user));
    },
    onMovieNameEntered: movieName => {
        dispatch(fetchMovieData(movieName));
    },
    onMovieItemRemoveClicked: movieName => {
        dispatch(removeMovie(movieName));
    },
    onMovieItemClicked: movieName => {
        dispatch(changeSelectedMovie(movieName));
    },
});

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;