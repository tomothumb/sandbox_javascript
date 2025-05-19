// import React from 'react'
import { useStore } from './store'
import './App.css'

function App() {
  const { count, increment, decrement, reset } = useStore()

  return (
    <div className="App">
      <h1>Zustand State Management Example</h1>
      <div className="card">
        <button onClick={increment}>
          Count is {count}
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
        <button onClick={reset}>
          Reset
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App