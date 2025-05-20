import { atom } from 'jotai';
import { Todo } from './types';

// Define filter type
export type FilterType = 'all' | 'active' | 'completed';

// Base atoms
export const todosAtom = atom<Todo[]>([]);
export const filterAtom = atom<FilterType>('all');

// Action atoms
export const addTodoAtom = atom(
  null,
  (get, set, text: string) => {
    const todos = get(todosAtom);
    set(todosAtom, [...todos, { id: Date.now(), text, completed: false }]);
  }
);

export const toggleTodoAtom = atom(
  null,
  (get, set, id: number) => {
    const todos = get(todosAtom);
    set(
      todosAtom,
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }
);

export const removeTodoAtom = atom(
  null,
  (get, set, id: number) => {
    const todos = get(todosAtom);
    set(todosAtom, todos.filter(todo => todo.id !== id));
  }
);

export const clearCompletedAtom = atom(
  null,
  (get, set) => {
    const todos = get(todosAtom);
    set(todosAtom, todos.filter(todo => !todo.completed));
  }
);

export const setFilterAtom = atom(
  null,
  (_, set, filter: FilterType) => {
    set(filterAtom, filter);
  }
);

// Derived atoms (selectors)
export const remainingCountAtom = atom(
  get => get(todosAtom).filter(todo => !todo.completed).length
);

export const completedCountAtom = atom(
  get => get(todosAtom).filter(todo => todo.completed).length
);

export const totalCountAtom = atom(
  get => get(todosAtom).length
);

export const hasTodosAtom = atom(
  get => get(todosAtom).length > 0
);

export const hasCompletedTodosAtom = atom(
  get => get(todosAtom).some(todo => todo.completed)
);

// Filtered todos atom
export const filteredTodosAtom = atom(
  get => {
    const todos = get(todosAtom);
    const filter = get(filterAtom);

    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  }
);