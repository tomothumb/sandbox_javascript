# React TypeScript State Management with Zustand

This project demonstrates how to use Zustand for state management in a React application with TypeScript and Vite.

## Features

- React with TypeScript
- Vite for fast development and building
- Zustand for state management
- Simple counter example

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
cd zustand
npm install
```

### Development

To start the development server:

```bash
npm run dev
```

This will start the Vite development server, typically at http://localhost:5173.

### Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

- `src/main.tsx`: Entry point of the application
- `src/App.tsx`: Main component that uses the Zustand store
- `src/store.ts`: Zustand store definition with state and actions
- `src/index.css`: Global styles
- `src/App.css`: Component-specific styles

## State Management with Zustand

This project uses Zustand for state management. The store is defined in `src/store.ts`:

```typescript
import { create } from 'zustand'

interface CountState {
  count: number
  increment: () => void
  decrement: () => void
  reset: () => void
}

export const useStore = create<CountState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}))
```

To use the store in a component:

```typescript
import { useStore } from './store';

function MyComponent() {
  const { count, increment, decrement, reset } = useStore();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
```

## License

MIT
