import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput />
        <UserOutput content="Output 100" username="Sam"/>
        <UserOutput content="Output 200" />
        <UserOutput content="Output 300" />
      </div>
    );
  }
}

export default App;