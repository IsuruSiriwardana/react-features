import React, { Component } from 'react';
import './NameInput.css';
import * as yup from 'yup';
import classNames from 'classnames';

const userNameSchema = yup.object().shape({
    userName: yup.string().required('Name is required')
});

class NameInput extends Component {

    onNameChanged = (event) => {
        this.props.onNameChanged(event.target.value);
    };

    onUserNameSubmitted = () => {
        this.props.onUserSubmitted(this.props.userName);
    };

    onMovieNameEntered = (event) => {
        if(event.key === 'Enter'){
            this.props.onMovieNameEntered(this.props.userName);
        }
    };

    render(){

        const isUserNameValid = userNameSchema.isValidSync({
            userName: this.props.userName,
        });

        return (
            <div id="nameInput" className="name-input">
                <label id="label_userName" className="user-name-label">Movie name</label>
                <div className="user-name-section">
                    <input
                        autoFocus
                        className="user-name-input"
                        type="text"
                        id="input_userName"
                        onChange={this.onNameChanged}
                        value = {this.props.userName}
                        onKeyPress={this.onMovieNameEntered}
                    />
                    {
                        !isUserNameValid
                        && <span id="userNameErrorMessage" className="error">Invalid movie name</span>
                    }
                </div>
                {
                    <button 
                        disabled={!isUserNameValid}
                        className={classNames({'user-name-button': true, 'user-name-button__disabled': !isUserNameValid })}
                        id="button_userName"
                        onClick={this.onUserNameSubmitted}>
                    Add
                    </button>
                }
            </div>
        )
    }
}

export default NameInput;