import React from "react";
import "./TodoList.css";

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          <input
            className="checkbox"
            type="checkbox"
            checked={todo.completed}
            onChange={() => onToggleTodo(todo.id)}
          />
          {todo.text}
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
