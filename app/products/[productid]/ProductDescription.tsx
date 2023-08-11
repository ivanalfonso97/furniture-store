"use client"
import { useState } from "react"
import Image from "next/image"
import { Item } from "@/app/types"
import QuantityChanger from "@/app/elements/QuantityChanger"
import { useCart } from "@/app/context/CartContext"

import { 
  BookmarkIcon,
} from "@heroicons/react/24/outline"
import { 
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid"

type Props = {
  product: Item;
}

function ProductDescription({ product }: Props) {
  const [quantity, setQuantity] = useState(1)
  const { 
    cartItems, 
    addToCart, 
    favoriteItems, 
    addToFavorites, 
    removeFromFavorites 
  } = useCart()
  console.log(favoriteItems)
  console.log(cartItems)
  const isFavorite = favoriteItems.some((favoriteItem: any) => favoriteItem.product_id === product?.product_id);

  return (
    <div className="flex flex-col gap-2 mt-6 px-5">
      <h4 className="text-2xl">{product?.name}</h4>
      <div className="flex justify-between items-center">
        <p className="title">$ {product?.price.toFixed(2)}</p>
        <QuantityChanger 
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div className="flex items-center">
        <Image 
          src="/icons/yellow_star_icon.png"
          width={20}
          height={20}
          alt="Yellow rating star"
          className="mr-2"
        />
        <p className="text-lg font-semibold mr-4">{product?.rating.toFixed(1)}</p>
        <p className="text-sm text-sub">({product?.review_count} reviews)</p>
      </div>
      <p className="text-sm text-sub mt-2">{product?.description}</p>
      <div className="fixed bottom-0 left-0 flex gap-4 w-full px-5 mb-8">
        <div
          className="flex justify-center items-center w-14 h-14 bg-secondary rounded-lg"
          onClick={() => { isFavorite ? removeFromFavorites(product) : addToFavorites(product) }}
        >
          {isFavorite ? <BookmarkIconSolid className="w-6 h-6" /> : <BookmarkIcon className="w-6 h-6" />}
        </div>
        <button 
          className="button flex-1"
          onClick={() => addToCart(product, quantity)}
        >Add to cart</button>
      </div>
    </div>
  )
}

export default ProductDescription