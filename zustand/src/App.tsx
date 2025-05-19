import { useStore } from './store'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import TodoFooter from './components/TodoFooter'
import TodoStats from './components/TodoStats'
import TodoFilter from './components/TodoFilter'

function App() {
  const hasTodos = useStore(state => state.hasTodos())

  return (
    <div className="App">
      <h1>Zustand Todo List Example</h1>

      <TodoForm />

      {hasTodos && <TodoFilter />}

      <TodoList />

      {hasTodos && (
        <>
          <TodoStats />
          <TodoFooter />
        </>
      )}
    </div>
  )
}

export default App
