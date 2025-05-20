import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { remainingCountAtom, hasCompletedTodosAtom, clearCompletedAtom } from '../atoms';

const TodoFooter: React.FC = () => {
  const remainingCount = useAtomValue(remainingCountAtom);
  const hasCompletedTodos = useAtomValue(hasCompletedTodosAtom);
  const clearCompleted = useSetAtom(clearCompletedAtom);

  return (
    <div className="todo-footer">
      <span>{remainingCount} items left</span>
      {hasCompletedTodos && (
        <button onClick={() => clearCompleted()} className="clear-button">
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;