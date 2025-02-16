import "./App.css";
import { Component } from "react";
import { TodoEditor } from "./components/TodoEditor";
import { TodoList } from "./components/TodoList";
import { Filter } from "./components/Filter";
import { Info } from "./components/Info";
import initialTodos from "./data/todo.json";

class App extends Component {
  state = {
    todos: initialTodos,
    filter: "",
  };

  addTodo = (text) => {
    const newTodo = {
      id: `id-${this.nextId}`,
      text,
      completed: false,
    };

    this.nextId += 1;

    this.setState((prevState) => ({
      todos: [newTodo, ...prevState],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  checkTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo;
      }),
    }));
  };

  getFilteredTodos = () => {
    const { todos, filter } = this.state;
    if (filter.trim() === "") {
      return todos;
    }
    return todos.filter((todo) =>
      todo.textValue.toLowerCase().includes(filter.toLowerCase())
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
        <h1>To-do App</h1>
        <TodoEditor onAddTodo={this.addTodo} />
        <Filter filter={this.state.filter} onChange={this.changeFilter} />
        <TodoList
          todos={filteredTodos}
          onDeleteTodo={this.deleteTodo}
          onCheckTodo={this.checkTodo}
        />
        <Info total={totalTodos} completed={completedTodos} />
      </div>
    );
  }
}

export default App;
