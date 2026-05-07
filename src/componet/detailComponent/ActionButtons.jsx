"use client"

import { useCart } from "@/context/CartContext"

import { HiOutlineShoppingCart } from "react-icons/hi"
import { toast } from "react-toastify"

const ActionButtons = ({ product, qty, total }) => {
  const { addToCart, buyNow, cart } = useCart()

  const handlebuy = () => {
    buyNow(product, qty, total)
    toast.success("Buyd successfull check the profile")
  }
  const addCard = () => {
    addToCart(product, qty, total)
      
  }

  return (
    <div className="flex gap-5 pt-10">
      <button
        onClick={addCard}
        className="btn w-1/2 hover:text-[#5C1621] border-2 hover:border-[#5C1621] bg-white"
      >
       <HiOutlineShoppingCart /> ADD TO CART
      </button>

      <button
        onClick={handlebuy}
        className="btn w-1/2 hover:text-[#5C1621] border-2 hover:border-[#5C1621] bg-white"
      >
        BUY IT NOW
      </button>
    </div>
  )
}

export default ActionButtons
