import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: 'Sam',
      input: ''
    }
  }

  updateUserName = () => {
    this.setState({
      username: "Obama!"
    })
  }

  changeHandler = (event) => {
    this.setState({
      username: event.target.value,
      input: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <UserInput input={this.state.input} changeHandler={this.changeHandler} />
        <UserOutput content="Output 100" username={this.state.username} updateUserName={this.updateUserName}/>
      </div>
    );
  }
}

export default App;