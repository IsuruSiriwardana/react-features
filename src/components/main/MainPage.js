import React, { Component } from 'react';
import NameInput from '../personEntry/NameInput';
import UserList from '../personEntry/UserList';
import MovieList from '../movie/MovieList';

class MainPage extends Component {

    render() {
        return (
            <div>
                <NameInput
                    userName={this.props.userName}
                    onNameChanged={this.props.onUserNameChanged}
                    onUserSubmitted={this.props.onUserSubmitted}
                />
                {(this.props.users.length > 0) && (<UserList
                    users={this.props.users}
                />)}

                {this.props.movies.length > 0 && (
                    <MovieList
                        movies={this.props.movies}
                    />
                )}    
            </div>
        );
    }
}

export default MainPage;