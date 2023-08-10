import FilterIcon from './FilterIcon'

type Props = {
  filter: string
  setFilter: (filter: string) => void
}

function Filter({ filter, setFilter }: Props) {
  return (
    <div className="flex justify-between w-full">
      <FilterIcon 
        filter={filter}
        filterName="popular"
        filterIconSrc="/icons/star_icon.png"
        filterIconAlt="Star icon"
        setFilter={setFilter}
      />
      <FilterIcon 
        filter={filter}
        filterName="chair"
        filterIconSrc="/icons/chair_icon.png"
        filterIconAlt="Chair icon"
        setFilter={setFilter}
      />
      <FilterIcon 
        filter={filter}
        filterName="table"
        filterIconSrc="/icons/table_icon.png"
        filterIconAlt="Table icon"
        setFilter={setFilter}
      />
      <FilterIcon 
        filter={filter}
        filterName="armchair"
        filterIconSrc="/icons/sofa_icon.png"
        filterIconAlt="Armchair icon"
        setFilter={setFilter}
      />
      <FilterIcon 
        filter={filter}
        filterName="bed"
        filterIconSrc="/icons/bed_icon.png"
        filterIconAlt="Bed icon"
        setFilter={setFilter}
      />
    </div>
    
  )
}

export default Filter