import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (event) => {
    this.setState({ text: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { text } = this.state;
    if (text.trim() === "") return;
    this.props.onAddTodo(text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Enter new todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}

export { TodoEditor };
