import React from 'react';
import { useAtomValue, useSetAtom } from 'jotai';
import { filterAtom, setFilterAtom, totalCountAtom, remainingCountAtom, completedCountAtom, FilterType } from '../atoms';

const TodoFilter: React.FC = () => {
  // Get the current filter from the atom
  const filter = useAtomValue(filterAtom);
  const setFilter = useSetAtom(setFilterAtom);

  // Get counts using derived atoms
  const totalCount = useAtomValue(totalCountAtom);
  const activeCount = useAtomValue(remainingCountAtom);
  const completedCount = useAtomValue(completedCountAtom);

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