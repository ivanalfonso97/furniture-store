type Props = {
  quantity: number;
  setQuantity: (quantity: number) => void;
}

function QuantityChanger({ quantity, setQuantity }: Props) {
  function subtractQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function addQuantity() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="flex items-center gap-[14px]">
      <button
        onClick={subtractQuantity}
        className="h-[30px] w-[30px] flex justify-center items-center text-2xl bg-secondary rounded-md"
      >-</button>
      <p>{quantity.toString().padStart(2, "0")}</p>
      <button
        onClick={addQuantity}
        className="h-[30px] w-[30px] flex justify-center items-center text-2xl bg-secondary rounded-md"
      >+</button>
    </div>
  )
}

export default QuantityChanger