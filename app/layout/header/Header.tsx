"use client"
import { useCart } from "@/app/context/CartContext"

import { 
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline"
import { inter } from "../../styles/fonts";
import Link from "next/link";

function Header() {
  const { cartItems } = useCart()
  const itemCount = cartItems.length
  
  return (
    <div className={`${inter.className} relative flex items-center justify-between text-sub`}>
      <MagnifyingGlassIcon className="w-6 h-6"/>
      <div className="flex flex-col items-center">
        <p className="text-sm leading-none uppercase">Make home</p>
        <p className="text-lg font-bold leading-none uppercase">Beautiful</p>
      </div>
      <Link href="/cart">
        <ShoppingCartIcon className="w-6 h-6"/>
      </Link>
      {itemCount > 0 && <div className="absolute -top-2 -right-3 -z-10 flex justify-center items-center w-6 h-6 text-xs bg-secondary rounded-full">{itemCount}</div>}
    </div>
  )
}

export default Header