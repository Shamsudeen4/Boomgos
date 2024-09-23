import React from 'react'
import Navbar from '../Navbar'
import OrderPage from '../Order-tracking/OrderPage'

const Order = () => {
  return (
    <div>
        <Navbar home = "active"/>
        <OrderPage />
    </div>
  )
}

export default Order