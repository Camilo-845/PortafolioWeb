import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './Components/NavBar/Navbar'
import Resume from "./Components/resume/Resume"
import Landing from "./Components/Landing/Landing"
import Contact from './Components/Contact/Contact'
import Work from './Components/Work/Work'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Landing></Landing>
      <Resume></Resume>
      <Work></Work>
      <Contact></Contact>
      <div id='footer'>
        <h3>Pagina diseñada y creada por Camilo Sarmiento</h3>
      </div>
    </div>
  )
}

export default App
