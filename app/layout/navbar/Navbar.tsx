"use client"
import { usePathname } from "next/navigation"
import Link from "next/link"

import { 
  HomeIcon,
  BookmarkIcon,
  BellIcon,
  UserIcon,
} from "@heroicons/react/24/outline"
import { 
  HomeIcon as HomeIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from "@heroicons/react/24/solid"
import styles from "./Navbar.module.css"

function Navbar() {
  const pathname = usePathname()

  return (
    <div className={styles.navbar}>
      <Link href="/home" className="w-6 h-6">
        <div>
          {pathname === "/home" ? <HomeIconSolid className="w-6 h-6" /> : <HomeIcon className="w-6 h-6" />}
        </div>
      </Link>
      <Link href="/favorites" className="w-6 h-6">
        <div>
          {pathname === "/favorites" ? <BookmarkIconSolid className="w-6 h-6" /> : <BookmarkIcon className="w-6 h-6" />}
        </div>
      </Link>
      <Link href="/home" className="w-6 h-6">
        <div>
          <BellIcon className="w-6 h-6" />
        </div>
      </Link>
      <Link href="/home" className="w-6 h-6">
        <div>
          <UserIcon className="w-6 h-6" />
        </div>
      </Link>
    </div>
  )
}

export default Navbar