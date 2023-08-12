"use client"
import { useState } from "react"

import { Item } from "../types"
import { useCart } from "../context/CartContext"
import Discount from "./Discount"

import { inter } from "../styles/fonts";
import Link from "next/link"

type Props = {
}

function Checkout() {
  const { cartItems, removeFromCart } = useCart()
  const [discount, setDiscount] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(false)

  const hasDiscount = discount > 0
  const subtotal = cartItems.reduce((acc: number, item: Item) => {
    const quantity = item.quantity_ordered ? item.quantity_ordered : 0
    return acc + (item.price * quantity)
  }, 0)
  const total = hasDiscount ? subtotal * (1 - discount) : subtotal

  function emptyCart() {
    setLoading(true)
    cartItems.forEach((item: Item) => {
      removeFromCart(item)
    })
    setLoading(false)
  }

  return (
    <div className="fixed bottom-14 px-5 w-full">
      {hasDiscount ?
        <div className="border-b border-secondary pb-4" >
          <div className="flex justify-between w-full">
            <p className="text-[#808080] font-semibold">Subtotal:</p>
            <p>$ {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between w-full">
            <p className="text-[#808080] font-semibold">Discount:</p>
            <p>- $ {(subtotal * discount).toFixed(2)}</p>
          </div>
        </div> :
        <Discount 
          setDiscount={setDiscount}
        />
      }
      <div className="flex justify-between w-full my-5">
        <p className={`${inter.className} text-xl font-bold text-[#808080]`}>Total:</p>
        <p className={`${inter.className} text-xl font-bold`}>$ {total.toFixed(2)}</p>
      </div>
      <Link href="/complete">
        <button 
          className="button" 
          onClick={emptyCart}
          disabled={loading}
        >
          Check out
        </button>
      </Link>
    </div>
  )
}

export default Checkout
