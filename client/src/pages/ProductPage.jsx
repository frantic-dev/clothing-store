import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductDetails from '../modules/ProductDetails'
import DownArrowIcon from '../assets/down-arrow-icon.svg?react'
import '../styles/pages/product-page.scss'

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
      <div id='product-page'>
        <div id='product-nav'>
        <Link to={'/'}>Home </Link>
        <DownArrowIcon id='right-arrow-icon' />
        <Link to={'/shop'}>Shop </Link>
        <DownArrowIcon id='right-arrow-icon' />
        {product.title}
      </div>
        <ProductDetails product={product} />
      </div>
    )
  }
}

export default ProductPage
