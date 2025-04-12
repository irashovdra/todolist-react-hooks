import React from "react";
import { useState, useEffect } from "react";
import { TodoList } from "./components/TodoList/TodoList.jsx";
import { TodoEditor } from "./components/TodoEditor.jsx";
import { Filter } from "./components/Filter/Filter.jsx";
import { Info } from "./components/Info/Info.jsx";
import initialTodos from "./data/todo.json";
import "./App.css";

let nextId = initialTodos.length + 1;

const App = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: "id-" + nextId++,
      text,
      completed: false,
    };
    setTodos([newTodo, ...todos]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos =
    filter === ""
      ? todos
      : todos.filter((todo) =>
          todo.text.toLowerCase().includes(filter.toLowerCase())
        );

  const total = todos.length;
  const completed = todos.filter((todo) => todo.completed).length;

  return (
    <div>
      <h1>Todo App</h1>
      <TodoEditor onAddTodo={addTodo} />
      <Filter filter={filter} onChange={setFilter} />
      <TodoList
        todos={filteredTodos}
        onDeleteTodo={deleteTodo}
        onToggleTodo={toggleTodo}
      />
      <Info total={total} completed={completed} />
    </div>
  );
};

export { App };
