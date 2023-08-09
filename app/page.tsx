"use client"

import { useRouter } from 'next/navigation'

import styles from './landing/Landing.module.css'

export default function Home() {
  const router = useRouter()

  function handleClick() {
    router.push("/login")
  }

  return (
    <main className={styles["landing-page-background"]}>
      <div className="flex flex-col justify-between py-14 px-8 h-full">
        <div>
          <h3 className="title mb-6 max-w-[266px] uppercase">Make your home beautiful</h3>
          <p className="text-body text-sub">The best simple place where you discover most wonderful furnitures and make your home beautiful</p>
        </div>
        <button 
          className="button text-lg"
          onClick={handleClick}
        >
          Get Started
        </button>
      </div>
    </main>
  )
}
