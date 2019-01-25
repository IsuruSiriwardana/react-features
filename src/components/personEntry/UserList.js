import React, { Component } from 'react';
import './UserList.css';

class UserList extends Component {

    render() {
        var users = this.props.users;
        var listItems = users.map((user, index) => 
            <div id="lit_item_user" key={index} className="list-item">{user.name}</div>
        );
        return (
                <ul id="list_users" className="list-box">
                    {listItems}
                </ul>
        );
    }
}

export default UserList;