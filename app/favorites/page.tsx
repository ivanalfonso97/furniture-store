"use client"
import Image from "next/image"
import { useCart } from "../context/CartContext"
import { Item } from "../types"
import Navbar from "../layout/navbar/Navbar"

import { 
  XCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline"
import { 
  ShoppingBagIcon as ShoppingBagIconSolid,
} from "@heroicons/react/24/solid"

function Favorites() {
  const { 
    cartItems,
    addToCart,
    removeFromCart,
    favoriteItems,
    removeFromFavorites,
  } = useCart()

  const isFavoritesEmpty = favoriteItems.length === 0
  function addAllToCart() {
    favoriteItems.forEach((item: Item) => {
      addToCart(item)
      removeFromFavorites(item)
    })
  }

  const favortiesList = favoriteItems.map((favoriteItem: Item) => {
    const isInCart = cartItems.some((cartItem: Item) => cartItem.product_id === favoriteItem?.product_id);

    return (
      <div 
        key={favoriteItem?.product_id} 
        className="flex flex-row-reverse justify-end w-full py-4 border-b border-secondary first:pt-0 last:border-b-0 last:pb-0"
      >
        <div className="flex flex-1 justify-between ml-4 w-full">
          <div>
            <p className="text-sm text-sub mb-1">{favoriteItem?.name}</p>
            <p className="font-semibold">$ {favoriteItem?.price.toFixed(2)}</p>
          </div>
          <div className="relative">
            <XCircleIcon className="w-6 h-6" onClick={() => removeFromFavorites(favoriteItem)} />
            <div
              className="gray-square absolute bottom-0 right-0"
              onClick={() => { isInCart ? removeFromCart(favoriteItem) : addToCart(favoriteItem)}}
            >
              {isInCart ? <ShoppingBagIconSolid className="w-5 h-5" /> : <ShoppingBagIcon className="w-5 h-5" />}
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden max-w-25 max-h-25 rounded-[10px]">
          <Image 
            src={favoriteItem?.product_images[0]}
            width={100}
            height={100}
            alt={favoriteItem?.name}
            className="item-image-small"
          />
        </div>
      </div>
    )
  })

  return (
    <div className="flex flex-col items-center px-5 w-full">
      <p className="font-bold mt-14 mb-6">Favorites</p>
      <div className="w-full max-h-[376px] overflow-scroll mb-6">
        {favortiesList}
      </div>
      {!isFavoritesEmpty && <button className="button" onClick={addAllToCart}>Add all to cart</button>}
      <Navbar />
    </div>
  )
}

export default Favorites