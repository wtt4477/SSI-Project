import "./styles.css";
import React from "react";
import CounterCal from "./Counter";
import TodoList from "./TodoList";

const HOC = (Component) => {
  const WithVisible = ({ visible }) => {
    if (!visible) return null;
    return <Component />;
  };
  return WithVisible;
};

const HOCCounter = HOC(CounterCal);
const HOCTodoList = HOC(TodoList);

class HOCContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CounterState: false,
      TodoListState: false
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ CounterState: !this.state.CounterState });
          }}
        >
          Counter
        </button>
        <button
          onClick={() => {
            this.setState({ TodoListState: !this.state.TodoListState });
          }}
        >
          TodoList
        </button>
        <HOCCounter visible={this.state.CounterState} />
        <HOCTodoList visible={this.state.TodoListState} />
      </div>
    );
  }
}

export default HOCContainer;
