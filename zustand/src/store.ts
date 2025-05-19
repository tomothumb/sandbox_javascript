import { create } from 'zustand'
import { createSelector } from "reselect";
import { Todo } from './types'

// Define filter type
export type FilterType = 'all' | 'active' | 'completed'

interface TodoState {
  todos: Todo[]
  filter: FilterType
  addTodo: (text: string) => void
  toggleTodo: (id: number) => void
  removeTodo: (id: number) => void
  clearCompleted: () => void
  setFilter: (filter: FilterType) => void
  // Selectors
  getRemainingCount: () => number
  getCompletedCount: () => number
  getTotalCount: () => number
  hasTodos: () => boolean
  hasCompletedTodos: () => boolean
}

export const useStore = create<TodoState>((set, get) => ({
  todos: [],
  filter: 'all' as FilterType,
  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), text, completed: false }]
    })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter(todo => todo.id !== id)
    })),
  clearCompleted: () =>
    set((state) => ({
      todos: state.todos.filter(todo => !todo.completed)
    })),
  setFilter: (filter: FilterType) =>
    set({filter: filter}),
  // Selectors
  getRemainingCount: () => get().todos.filter(todo => !todo.completed).length,
  getCompletedCount: () => get().todos.filter(todo => todo.completed).length,
  getTotalCount: () => get().todos.length,
  hasTodos: () => get().todos.length > 0,
  hasCompletedTodos: () => get().todos.some(todo => todo.completed),
}))

const selectorTodos = (state:TodoState) => state.todos;
const selectorFilter = (state:TodoState) => state.filter;

// reselectを使う
export const getFilteredTodos = createSelector(
  [selectorTodos, selectorFilter],
  (todos, filter) => {
    console.log("called", todos, filter);
    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  },
);

