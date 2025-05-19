import React from 'react';
import { useStore } from '../store';

const TodoFooter: React.FC = () => {
  const remainingCount = useStore(state => state.getRemainingCount());
  const hasCompletedTodos = useStore(state => state.hasCompletedTodos());
  const clearCompleted = useStore(state => state.clearCompleted);

  return (
    <div className="todo-footer">
      <span>{remainingCount} items left</span>
      {hasCompletedTodos && (
        <button onClick={clearCompleted} className="clear-button">
          Clear Completed
        </button>
      )}
    </div>
  );
};

export default TodoFooter;
