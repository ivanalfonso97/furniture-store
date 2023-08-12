import Image from "next/image"
import Link from "next/link"

function Complete() {
  return (
    <div className="flex flex-col items-center pt-10 px-5">
      <div className="mt-30">
        <h3 className="title uppercase text-center mb-7">Success!</h3>
        <div className="relative mb-12">
          <Image 
            src="/images/success.png" 
            width={270} 
            height={230} 
            alt="A cartoonish living room drawing"
          />
          <Image
            src="/icons/green_checkmark_icon.png" 
            width={50} 
            height={50} 
            alt="Green checkmark icon"
            className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
          />
        </div>
        <p className="text-sub">Your order will be delivered soon.</p>
        <p className="text-sub">Thank you for choosing our app!</p>
      </div>
      <div className="fixed bottom-12 px-5 w-full">
        <button className="button mb-4">Track your orders</button>
        <Link href="/home">
          <button className="button">Back to home</button>
        </Link>
      </div>
    </div>
  )
}

export default Complete