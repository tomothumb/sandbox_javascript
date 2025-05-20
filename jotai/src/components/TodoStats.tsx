import React from 'react';
import { useAtomValue } from 'jotai';
import { totalCountAtom, completedCountAtom, remainingCountAtom } from '../atoms';

const TodoStats: React.FC = () => {
  // Using atoms to get only the data we need
  const totalCount = useAtomValue(totalCountAtom);
  const completedCount = useAtomValue(completedCountAtom);
  const remainingCount = useAtomValue(remainingCountAtom);

  // Calculate completion percentage
  const completionPercentage = totalCount === 0
    ? 0
    : Math.round((completedCount / totalCount) * 100);

  return (
    <div className="todo-stats">
      <h2>Todo Statistics</h2>
      <div className="stats-container">
        <div className="stat-item">
          <span className="stat-label">Total:</span>
          <span className="stat-value">{totalCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Completed:</span>
          <span className="stat-value">{completedCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Remaining:</span>
          <span className="stat-value">{remainingCount}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Completion:</span>
          <span className="stat-value">{completionPercentage}%</span>
        </div>
      </div>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${completionPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default TodoStats;