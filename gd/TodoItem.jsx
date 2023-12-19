import React from 'react';

const TodoItem = ({ todo, removeTodo, toggleComplete }) => {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>Remove</button>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
    </li>
  );
};

export default TodoItem;
