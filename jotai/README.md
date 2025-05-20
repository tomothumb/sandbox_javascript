# Jotai Todo App

This is a Todo application built with React, TypeScript, and Jotai for state management. It's a port of the Zustand Todo app, demonstrating how to use Jotai for managing application state.

## Features

- Add, toggle, and delete todos
- Filter todos by status (all, active, completed)
- View statistics about todos
- Clear completed todos

## Technologies Used

- React 19
- TypeScript
- Jotai for state management
- Vite for build tooling

## Getting Started

1. Install dependencies:
   ```
   npm install
   ```

2. Start the development server:
   ```
   npm run dev
   ```

3. Build for production:
   ```
   npm run build
   ```

## Project Structure

- `src/atoms.ts`: Contains all Jotai atoms for state management
- `src/components/`: Contains all React components
- `src/App.tsx`: Main application component
- `src/types.ts`: TypeScript type definitions

## How Jotai Works

Jotai uses an atomic approach to state management. Instead of having a single store like Zustand, Jotai uses atoms as the basic unit of state. Atoms can be primitive values or derived from other atoms.

Key concepts used in this project:

1. **Base atoms**: Simple atoms that hold primitive values (`todosAtom`, `filterAtom`)
2. **Action atoms**: Atoms that modify other atoms (`addTodoAtom`, `toggleTodoAtom`, etc.)
3. **Derived atoms**: Atoms that compute values based on other atoms (`filteredTodosAtom`, `remainingCountAtom`, etc.)

## Comparison with Zustand

This project demonstrates how to achieve the same functionality as the Zustand implementation but using Jotai's atomic approach to state management. The main differences are:

- Zustand uses a single store with actions and selectors
- Jotai uses multiple atoms with derived values
- Component integration is different (useAtomValue/useSetAtom vs useStore)