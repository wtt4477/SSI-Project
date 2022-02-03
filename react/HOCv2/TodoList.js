import "./styles.css";
import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: "asc",
      todos: []
    };
  }

  addTodo = (todo) => {
    const newTodos = [todo, ...this.state.todos];
    this.setState({
      todos: newTodos
    });
  };

  deleteComplete = (id) => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.id !== id)
    });
  };

  sortList = (event) => {
    const { todos } = this.state;
    let newTodo = todos.reverse();
    this.setState({ todos: newTodo.sort((a, b) => a > b) });
  };

  render() {
    return (
      <div>
        <TodoForm onSubmit={this.addTodo} />
        <button
          style={{ display: "flex", justifyContent: "center" }}
          onClick={this.sortList}
        >
          Sort
        </button>
        {this.state.todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            deleteComplete={() => this.deleteComplete(todo.id)}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
