import React from 'react';
import { useAtomValue } from 'jotai';
import { filteredTodosAtom, hasTodosAtom, filterAtom } from '../atoms';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  // Use atoms to get the state
  const hasTodos = useAtomValue(hasTodosAtom);
  const filter = useAtomValue(filterAtom);
  const filteredTodos = useAtomValue(filteredTodosAtom);

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