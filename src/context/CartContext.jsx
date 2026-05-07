"use client"
import { createContext, useContext, useState } from "react"
import { toast } from "react-toastify"

const CartContext = createContext()

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [orders, setOrders] = useState([])

  const addToCart = (product, qty) => {
    const exist = cart.find(item => item.id === product.id)

    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id
          ? { ...item, qty: item.qty + qty }
          : item
      ))
      toast.error("allrady added")
    } else {
      setCart([...cart, { ...product, qty }])
      toast.success("Cart added Successfull")
    }
  }

  const buyNow = (product, qty, total) => {
    setOrders([...orders, { ...product, qty , total, orderId: Date.now()}])
  }

  const deletOrder = (orderId) => {
    const delet = orders.filter(item => item.orderId !== orderId)
    setOrders(delet)
  }
  const deletAddCart = (id) => {
    const delet = orders.filter(item => item.id !== id)
    setCart(delet)
  }

  return (
    <CartContext.Provider value={{ cart, orders, addToCart, buyNow, deletOrder, deletAddCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)