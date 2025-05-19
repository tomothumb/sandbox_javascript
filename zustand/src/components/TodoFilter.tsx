import React from 'react';
import { useStore, FilterType } from '../store';

const TodoFilter: React.FC = () => {
  // Get the current filter from the store
  const filter = useStore(state => state.filter);
  const setFilter = useStore(state => state.setFilter);

  // Get counts using selectors
  const totalCount = useStore(state => state.getTotalCount());
  const activeCount = useStore(state => state.getRemainingCount());
  const completedCount = useStore(state => state.getCompletedCount());

  // Handle filter change
  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
  };

  return (
    <div className="todo-filter">
      <h2>Filter Todos</h2>
      <div className="filter-buttons">
        <button
          className={`filter-button ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilterChange('all')}
        >
          All ({totalCount})
        </button>
        <button
          className={`filter-button ${filter === 'active' ? 'active' : ''}`}
          onClick={() => handleFilterChange('active')}
        >
          Active ({activeCount})
        </button>
        <button
          className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => handleFilterChange('completed')}
        >
          Completed ({completedCount})
        </button>
      </div>
    </div>
  );
};

export default TodoFilter;
