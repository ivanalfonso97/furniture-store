"use client"
import { useState } from "react"
import Image from "next/image"

import Filter from "../layout/filter/Filter"

import { useCart } from "../context/CartContext"

import { 
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"
import { 
  ShoppingBagIcon as ShoppingBagIconSolid,
} from "@heroicons/react/24/solid"
import Link from "next/link"

type Props = {
  items: any[]
}

function ItemList({ items }: Props) {
  const [filter, setFilter] = useState("popular")
  const { cartItems, addToCart, removeFromCart } = useCart()

  const itemListings = items
    .filter((item) => {
      if (filter === "popular") {
        return item?.rating >= 4
      } else {
        return item?.type === filter
      }
    })
    .sort((a, b) => {
      if (a.priority !== b.priority) {
        return a.priority - b.priority;
      } else {
        return a.name.localeCompare(b.name);
      }
    })
    .map((item) => {
      const isInCart = cartItems.some((cartItem: any) => cartItem.product_id === item?.product_id);

      return (
        <div key={item?.product_id} >
          <div className="relative aspect-[3/4] rounded-[10px]">
            <Link href={`/products/${item?.product_id}`}>
              <Image 
                src={item?.main_image}
                fill={true}
                style={{objectFit: "contain"}}
                alt={item?.name}
              />
            </Link>
            <div
              className="gray-square absolute bottom-2 right-2"
              onClick={() => { isInCart ? removeFromCart(item) : addToCart(item)}}
            >
              {isInCart ? <ShoppingBagIconSolid className="w-5 h-5" /> : <ShoppingBagIcon className="w-5 h-5" />}
            </div>
          </div>
          <Link href={`/products/${item?.product_id}`}>
            <p className="text-sm text-sub mt-3">{item?.name}</p>
            <p className="font-bold">$ {item?.price.toFixed(2)}</p>
          </Link>

        </div>
      )
    })

  return (
    <div className="py-8 px-5">
      <Filter 
        filter={filter}
        setFilter={setFilter}
      />
      <div className="grid grid-cols-2 gap-5 mt-5">
        {itemListings}
      </div>
    </div>
  )
}

export default ItemList