import React from 'react';
import { Todo } from '../types';
import { useStore } from '../store';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { toggleTodo, removeTodo } = useStore();
  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />
      <span className="todo-text">{todo.text}</span>
      <button
        onClick={() => removeTodo(todo.id)}
        className="delete-button"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
