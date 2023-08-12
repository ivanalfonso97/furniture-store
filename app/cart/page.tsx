"use client"
import Link from "next/link"
import Image from "next/image"

import QuantityChanger from "../elements/QuantityChanger"
import Checkout from "./Checkout"

import { useCart } from "../context/CartContext"
import { Item } from "../types"

import { 
  XCircleIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline"

function Favorites() {
  const { 
    cartItems,
    updateQuantity,
    removeFromCart,
  } = useCart()
  const cartList = cartItems.map((cartItem: Item) => {
    function addQuantity(quantity: number) {
      updateQuantity(cartItem, quantity + 1)
    }

    function subtractQuantity(quantity: number) {
      if (quantity > 0) {
        updateQuantity(cartItem, quantity - 1)
      }
    }

    return (
      <div 
        key={cartItem?.product_id} 
        className="flex flex-row-reverse justify-end w-full py-4 border-b border-secondary first:pt-0 last:border-b-0 last:pb-0"
      >
        <div className="flex flex-1 justify-between ml-4 w-full">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-sm text-sub mb-1">{cartItem?.name}</p>
              <p className="font-semibold">$ {cartItem?.price.toFixed(2)}</p>
            </div>
            {cartItem.quantity_ordered !== undefined && 
              <QuantityChanger
                quantity={cartItem.quantity_ordered}
                addQuantity={addQuantity}
                subtractQuantity={subtractQuantity}
              />
            }
          </div>
          
          <div className="relative">
            <XCircleIcon className="w-6 h-6" onClick={() => removeFromCart(cartItem)} />
          </div>
        </div>
        <div className="relative overflow-hidden max-w-25 max-h-25 rounded-[10px]">
          <Image 
            src={cartItem?.product_images[0]}
            width={100}
            height={100}
            alt={cartItem?.name}
            className="item-image-small"
          />
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center px-5 w-full">
      <div className="grid grid-cols-3 mt-14 mb-6 w-full">
        <Link href="/home" className="place-self-start">
          <ChevronLeftIcon className="w-5 h-5" />
        </Link>
        <p className="font-bold place-self-center ">My cart</p>
      </div>
      <div className="w-full overflow-scroll mb-6">
        {cartList}
      </div>
      <Checkout />
    </div>
  )
}

export default Favorites