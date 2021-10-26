import React from 'react';
import PageTitle from './page-title';
import TodoList from './todo-list';
import TodoForm from './todo-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.addTodo = this.addTodo.bind(this);
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }

  componentDidMount() {
    /**
     * Use fetch to send a GET request to `/api/todos`.
     * Then 😉, once the response JSON is received and parsed,
     * update state with the received todos.
     */

    fetch('api/todos')
      .then(response => response.json())
      .then(data => this.setState({ todos: data }));

  }

  addTodo(newTodo) {
    fetch('/api/todos', {
      method: 'POST',
      body: JSON.stringify(newTodo),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => this.setState({ todos: this.state.todos.concat(data) }));

  }

  toggleCompleted(todoId) {

    let newState = null;
    let changeIndex = null;
    for (let i = 0; i < this.state.todos.length; i++) {
      if (this.state.todos[i].todoId === todoId) {
        changeIndex = i;
        newState = { isCompleted: !this.state.todos[i].isCompleted };
      }
    }
    fetch(`api/todos/${todoId}`, {
      method: 'PATCH',
      body: JSON.stringify(newState),
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        const newTodos = Object.assign(this.state.todos);
        newTodos[changeIndex] = data;
        this.setState({ todos: newTodos });
      });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col pt-5">
            <PageTitle text="Todo App"/>
            <TodoForm onSubmit={this.addTodo}/>
            <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted}/>
          </div>
        </div>
      </div>
    );
  }
}
