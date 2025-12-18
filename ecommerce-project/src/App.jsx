import axios from 'axios'
import { Route, Routes } from 'react-router'
import { useState, useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/checkout/CheckoutPage'
import { OrderPage } from './pages/OrderPage'
import { TrackingPage } from './pages/TrackingPage'
import { ErrorPage } from './pages/ErrorPage'
import './App.css'

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get('/api/cart-items')
      .then((response) => {
        setCart(response.data);
      })
  }, [])

  return (
    <Routes>
      <Route index element={<HomePage cart= {cart} />} />
      <Route path="checkout" element={<CheckoutPage cart= {cart} />} />
      <Route path="orders" element={<OrderPage />} />
      <Route path="tracking" element={<TrackingPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  )
}

export default App