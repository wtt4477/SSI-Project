import "./styles.css";
import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (evt) => {
    this.setState({ text: evt.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: Date.now(),
      text: this.state.text
    });
    this.setState({
      text: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.text}
          onChange={this.handleChange}
          placeholder=" Please enter here!"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default TodoForm;
