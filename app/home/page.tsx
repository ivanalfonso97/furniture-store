import Header from "../layout/header/Header"
import ItemList from "./ItemList"
import Navbar from "../layout/navbar/Navbar"

import getItems from "../utils/getItems"

async function Home() {
  const items = await getItems()

  return (
    <div className="py-12 px-5">
      <Header />
      <ItemList 
        items={items}
      />
      <Navbar />
    </div>
  )
}

export default Home