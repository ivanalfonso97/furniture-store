import Image from "next/image"

import styles from "./Filter.module.css"

type Props = {
  filter: string
  filterName: string
  filterIconSrc: string
  filterIconAlt: string
  setFilter: (filter: string) => void
}

function FilterIcon({
  filter,
  filterName,
  filterIconSrc,
  filterIconAlt,
  setFilter
}: Props) {
  return (
    <div className="flex flex-col items-center w-11">
      <div 
        data-active={filter === filterName ? "true" : "false"}
        className={`${styles.filterIcon} mb-1`}
        onClick={() => setFilter(filterName)}
      >
        <Image 
          src={filterIconSrc}
          width={20}
          height={20}
          alt={filterIconAlt}
        />
      </div>
      <p className="text-sm capitalize">{filterName}</p>
    </div>
  )
}

export default FilterIcon