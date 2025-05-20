import React, { useState } from 'react';
import { useSetAtom } from 'jotai';
import { addTodoAtom } from '../atoms';

const TodoForm: React.FC = () => {
  const addTodo = useSetAtom(addTodoAtom);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      addTodo(newTodo.trim());
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="What needs to be done?"
        className="todo-input"
      />
      <button type="submit" className="add-button">Add Todo</button>
    </form>
  );
};

export default TodoForm;