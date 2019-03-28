import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import Output from './Output/Output';


class App extends Component {
  state = {
    input: '',
    todos: []
  }

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let currInput = this.state.input
    let currTodos = this.state.todos
    this.setState({
      todos: [...currTodos, currInput]
    })
  }

  handleDelete = (event, key) => {
    event.preventDefault()
    
    let newState = this.state.todos.filter((todo, i) => i !== key)
    this.setState({
      todos: newState
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>To Do App</h1>
        <UserInput 
          input={this.state.input} 
          handleChange={this.handleChange}
        />
        <Output
          todos={this.state.todos}
          input={this.state.input}
          handleSubmit={this.handleSubmit}
          delete={this.handleDelete}
        />
      </div>
    )
  }
}

export default App;