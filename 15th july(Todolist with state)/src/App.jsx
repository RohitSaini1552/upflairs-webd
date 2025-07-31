import { useState } from 'react'
import './App.css'
import ToDoList from './Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
          <ToDoList/>
    </>
  )
}

export default App