import { useState } from 'react'
import './App.css'
import Addtodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <Addtodo />
      <Todos />
    </>
  )
}

export default App
