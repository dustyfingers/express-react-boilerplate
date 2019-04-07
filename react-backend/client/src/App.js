import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {users: []}

  componentDidMount() {
    fetch('/users')
      .then(res => res.john())
      .then(users => this.setsState({ users }))
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        {this.state.users.map(
          user => <div key={user.id}>{ user.username }</div>
        )}
      </div>
    );
  }
}

export default App;
