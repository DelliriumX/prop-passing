import React, { Component } from 'react';
import User from '../User'
import "./style.css"

class UserList extends Component {
    state = {
        users: []
    }

    componentDidMount = () => {
        fetch('https://randomuser.me/api/?results=15')
            .then(res => res.json())
            .then(response => {
                this.props.setUsers(response.results)
            })
    }

    render() {
        return (
            <div id="list">
                <div>User List</div>
                {this.props.users.map(user => <User first={user.name.first} last={user.name.last}></User>)}
            </div>
        );
    }
}

export default UserList;