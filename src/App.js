import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "Sam"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput />
        <UserOutput content="Output 100" username={this.state.username}/>
        <UserOutput content="Output 200" />
        <UserOutput content="Output 300" />
      </div>
    );
  }
}

export default App;