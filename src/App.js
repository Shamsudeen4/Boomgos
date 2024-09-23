import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Navbar from './Components/Navbar'
import Home from './Components/Home Page/Home'
import Order from './Components/Order-tracking/Order'
import ShopPage from './Components/Shop-page/ShopPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Order/>} path='/order'/>
          <Route element={<ShopPage/>} path='/shop'/>

      </Routes>
    </BrowserRouter>
  )
}

export default App