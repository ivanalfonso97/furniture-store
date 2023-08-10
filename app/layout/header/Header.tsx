import { 
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline"
import { inter } from "../../styles/fonts";

function Header() {
  return (
    <div className={`${inter.className} flex items-center justify-between text-sub`}>
      <MagnifyingGlassIcon className="w-6 h-6"/>
      <div className="flex flex-col items-center">
        <p className="text-sm leading-none uppercase">Make home</p>
        <p className="text-lg font-bold leading-none uppercase">Beautiful</p>
      </div>
      <ShoppingCartIcon className="w-6 h-6"/>
    </div>
  )
}

export default Header