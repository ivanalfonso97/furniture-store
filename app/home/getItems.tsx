async function getItems() {
  const response = await fetch("http://localhost:3000/api/items", {
    method: "GET",
  })
  const data = await response.json()
  return data
}

export default getItems