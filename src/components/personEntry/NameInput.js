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
        const user = {
            name: this.props.userName
        }
        this.props.onUserSubmitted(user);
    }

    render(){

        const isUserNameValid = userNameSchema.isValidSync({
            userName: this.props.userName,
        });

        return (
            <div id="nameInput" className="name-input">
                <label id="label_userName" className="user-name-label">User name</label>
                <div className="user-name-section">
                    <input
                        autoFocus
                        className="user-name-input"
                        type="text"
                        id="input_userName"
                        onChange={this.onNameChanged}
                        value = {this.props.userName}
                    />
                    {
                        !isUserNameValid
                        && <span id="userNameErrorMessage" className="error">User name is not valid</span>
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