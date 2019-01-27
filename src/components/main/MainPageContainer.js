import { connect } from 'react-redux';
import {
    changeUserName,
    fetchMovieData,
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
        //dispatch(addUser(user));
        dispatch(fetchMovieData(user));
    }
});

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;