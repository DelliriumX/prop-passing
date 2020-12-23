import React, { Component } from 'react';
import "./style.css"

class User extends Component {
    render() {
        return (
            <div id="user">
                {this.props.first}-{this.props.last}
            </div>
        );
    }
}

export default User;