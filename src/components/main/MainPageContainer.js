import { connect } from 'react-redux';
import {
    addUser,
    changeUserName,
} from '../../actions/index';
import MainPage from './MainPage';

const mapStateToProps = state => {
    return {
        users: state.users,
        userName: state.userName,
    };
    
};

const mapDispatchToProps = dispatch => ({
    onUserNameChanged: userName => {
        dispatch(changeUserName(userName));
    },
    onUserSubmitted: user => {
        dispatch(addUser(user));
    }
});

const MainPageContainer = connect(mapStateToProps, mapDispatchToProps)(MainPage);

export default MainPageContainer;