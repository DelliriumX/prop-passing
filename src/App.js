import React, { Component } from 'react'
import Blog from './components/Blog'
import './App.css'

class App extends Component {
  state = {
    users: [],
    searchString: ""
  }

  setUsers = (data) => {
    this.setState({
      users: data
    })
  }

  setSearch = (str) => {
    this.setState({
      searchString: str
    })
  }

  render() {
    console.log(this.state.users)
    const usersMatchingSearch =
      this.state.users.filter(user => {
        if (user.name.first.includes(this.state.searchString))
          return true
        if (user.name.last.includes(this.state.searchString))
          return true

        return false
      })


    return (
      <div id="app">
        <div>Ovo je app</div>
        <Blog
          searchString={this.state.searchString}
          setSearch={this.setSearch}
          users={usersMatchingSearch}
          setUsers={this.setUsers} />
      </div>
    );
  }
}

export default App;
