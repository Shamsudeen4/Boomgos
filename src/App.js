import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import Home from './Components/Home Page/Home'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home/>} path='/'/>
      </Routes>
    </BrowserRouter>
  )
}

export default App