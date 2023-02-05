import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar/Navbar'
import Resume from "./Components/resume/Resume"
import Landing from "./Components/Landing/Landing"
import Contact from './Components/Contact/Contact'
import Work from './Components/work/work'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Landing></Landing>
      <Resume></Resume>
      <Work></Work>
      <Contact></Contact>
    </div>
  )
}

export default App
