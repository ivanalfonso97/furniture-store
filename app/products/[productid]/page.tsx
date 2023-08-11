import Image from "next/image"
import { Item } from "@/app/types"
import getItems from "@/app/utils/getItems"
import Link from "next/link"
import ProductDescription from "./ProductDescription"

import { 
  ChevronLeftIcon,
} from "@heroicons/react/24/outline"
import styles from "./Products.module.css"

async function ProductPage({ params }: { params: { productid: string } }) {
  const items = await getItems()
  const product = items.find((item: Item) => item.product_id === params.productid)
  
  return (
    <div className="h-screen overflow-hidden">
      <Link href="/home">
        <div className={`${styles.backButton} bg-white top-14 left-9 z-10`}>
          <ChevronLeftIcon className="w-5 h-5"/>
        </div>
      </Link>
      <div className="overflow-hidden relative flex flex-start w-full h-1/2 ml-14 rounded-bl-[50px]">
        <Image 
          src={product?.product_images[1]}
          fill={true}
          alt={product?.name}
        />
      </div>
      <ProductDescription product={product} />
    </div>
  )
}

export default ProductPage