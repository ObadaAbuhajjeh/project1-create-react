import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Employees from './Employees'
import Clients from './Clients'
import Footer from './Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Employees />
      <Clients />
      <Footer />
    </div>
  )
  
}

export default App
