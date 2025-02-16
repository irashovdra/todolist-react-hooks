import { Component } from "react";

export class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  stateChange = (event) => {
    this.setState({ textValue: event.target.value });
  };

  submitNewTodo = (event) => {
    event.preventDefault();
    const { textValue } = this.state;
    this.props.onAddTodo(textValue);
    this.setState({ textValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitNewTodo}>
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.stateChange}
          placeholder="Enter new to-do"
        />
        <button type="submit">Add Todo</button>
      </form>
    );
  }
}
