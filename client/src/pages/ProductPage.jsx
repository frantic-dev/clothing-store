import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductDetails from '../modules/ProductDetails'

function ProductPage() {
  const { productId } = useParams()
  const [product, setProduct] = useState({})

  async function getProductData() {
    const response = await (await axios.get(`/api/products/${productId}`)).data
    setProduct(response)
    console.log(response)
  }
  useEffect(() => {
    getProductData()
  }, [])

  if (Object.keys(product).length > 0) {
    return (
      <div>
        <ProductDetails product={product} />
      </div>
    )
  }
}

export default ProductPage
