import React from 'react';
import { useSetAtom } from 'jotai';
import { Todo } from '../types';
import { toggleTodoAtom, removeTodoAtom } from '../atoms';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const toggleTodo = useSetAtom(toggleTodoAtom);
  const removeTodo = useSetAtom(removeTodoAtom);

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