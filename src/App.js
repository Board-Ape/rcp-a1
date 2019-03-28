import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';


class App extends Component {
  state = {
    input: ''
  }

  handleChange = (event) => {

  }
  
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <UserInput />
      </div>
    )
  }
}

export default App;