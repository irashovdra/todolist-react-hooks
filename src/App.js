import React, { Component } from "react";
import { TodoList } from "./components/TodoList.jsx";
import { TodoEditor } from "./components/TodoEditor.jsx";
import { Filter } from "./components/Filter.jsx";
import { Info } from "./components/Info.jsx";
import initialTodos from "./data/todo.json";

class App extends Component {
  nextId = initialTodos.length + 1;

  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: "id-" + this.nextId,
      text: text,
      completed: false,
    };
    this.nextId++;
    this.setState((prevState) => ({
      todos: [newTodo, ...prevState.todos],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (value) => {
    this.setState({ filter: value });
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    if (filter.trim() === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const filteredTodos = this.getFilteredTodos();
    const totalTodos = this.state.todos.length;
    const completedTodos = this.state.todos.filter(
      (todo) => todo.completed
    ).length;

    return (
      <div>
        <h1>Todo App</h1>
        <TodoEditor onAddTodo={this.addTodo} />
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleTodo={this.toggleTodo}
        />
        <Info total={totalTodos} completed={completedTodos} />
      </div>
    );
  }
}

export { App };
