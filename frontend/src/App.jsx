import { useState } from 'react'
import './App.css'
import { AllRoute } from './components/AllRoute'
import { Nav } from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
      <AllRoute/>
      <h1 className=" bg-red-500  underline">
      Hello world!
    </h1>
    </div>
  )
}

export default App
