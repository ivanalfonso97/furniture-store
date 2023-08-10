function ProductPage({ params }: { params: { productid: string } }) {
  return (
    <div>
      Product Page: {params.productid}
    </div>
  )
}

export default ProductPage