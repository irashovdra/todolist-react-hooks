export const TodoList = ({ todos, onDeleteTodo, onCheckTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <p
            onClick={() => onCheckTodo(todo.id)}
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          ></p>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
