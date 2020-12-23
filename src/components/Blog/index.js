import { Component } from 'react';
import SearchBar from '../SearchBar'
import UserList from '../UserList'
import "./style.css"

class Blog extends Component {
    render() {
        console.log(this.props)
        return (
            <div id="blog">
                <div>BLOG</div>
                <SearchBar
                    searchString={this.props.searchString}
                    users={this.props.users}
                    setSearch={this.props.setSearch} />
                <UserList
                    users={this.props.users}
                    setUsers={this.props.setUsers} />
            </div>
        );
    }
}

export default Blog;