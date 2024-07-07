import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Componant/Todo'
import ViewTodos from './Componant/ViewTodos'


function App() {
  

  return (
    <>
    <h1 className='title'>Todo Application</h1>
      <Todo/>
      <ViewTodos/>
    </>
  )
}

export default App
