import React from 'react';
import {getFilteredTodos, useStore} from '../store';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  // Use getFilteredTodos selector to get todos filtered by the current filter
  const hasTodos = useStore(state => state.hasTodos());
  const filter = useStore(state => state.filter);
  const filteredTodos = useStore(getFilteredTodos);

  return (
    <div className="todo-list">
      {!hasTodos ? (
        <p className="empty-message">No todos yet! Add one above.</p>
      ) : filteredTodos.length === 0 ? (
        <p className="empty-message">No {filter} todos found.</p>
      ) : (
        <ul>
          {filteredTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
