import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layouts/Header';
import AddTodo from './components/AddTodo';

class App extends Component {
  state = {
    todos : [
      {
        id: 1,
        title: 'Cook Shrimp curry',
        completed: false
      },
      {
        id: 2,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 3,
        title: 'Do the Laundry',
        completed: false
      }
    ]
  }

  delTodo = (id) => {
    this.setState({
      todos : [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  markComplete = (id) => {
    this.setState({
      todos : this.state.todos.map( todo => {
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo;
      })
    });
  }
  render(){
    return(
      <div className="app">
        <div className="conatiner">
          <Header />
          <AddTodo />
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }
}

export default App;