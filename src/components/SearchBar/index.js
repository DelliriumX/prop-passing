import React, { Component } from 'react';
import './style.css'

class SearchBar extends Component {
    changeHandler = (event) => {
        this.props.setSearch(event.target.value)
    }

    render() {
        const males = this.props.users
            .filter(user => user.gender === 'male')
            .length
        const females = this.props.users
            .filter(user => user.gender === 'female')
            .length

        return (
            <div id="search">
                <input type="text" onChange={this.changeHandler}></input>
                <span>M: {males}</span>
                <span>F: {females}</span>
            </div>
        );
    }
}

export default SearchBar;