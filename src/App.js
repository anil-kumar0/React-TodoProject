import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Prepare the resume',
        completed: false
      },
      {
        id: 2,
        title: 'Cook some food',
        completed: false
      },
      {
        id: 3,
        title: 'Buy some beer',
        completed: false
      }
    ]
  }

  render() {
    return (
      <div className="App">
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
