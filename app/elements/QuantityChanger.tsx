import { inter } from "../styles/fonts";

type Props = {
  quantity: number;
  addQuantity: (quantity: number) => void;
  subtractQuantity: (quantity: number) => void;
}

function QuantityChanger({ quantity, addQuantity, subtractQuantity }: Props) {
  return (
    <div className="flex items-center gap-[14px]">
      <button
        onClick={() => subtractQuantity(quantity)}
        className="h-[30px] w-[30px] flex justify-center items-center text-2xl bg-secondary rounded-md"
      >-</button>
      <p className={inter.className}>{quantity.toString().padStart(2, "0")}</p>
      <button
        onClick={() => addQuantity(quantity)}
        className="h-[30px] w-[30px] flex justify-center items-center text-2xl bg-secondary rounded-md"
      >+</button>
    </div>
  )
}

export default QuantityChanger