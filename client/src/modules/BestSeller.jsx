import axios from 'axios'
import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'

function BestSeller() {
  const [productsData, setProductsData] = useState({})

  async function getBestSellerProducts() {
    const products = await axios.get(
      'https://fakestoreapi.com/products?limit=8'
    )
    setProductsData(products.data)
  }

  useEffect(() => {
    getBestSellerProducts()
  })

  const productsCards = productsData.map(product => (
    <ProductCard
      key={product.id}
      img={product.image}
      title={product.title}
      price={product.price}
    />
  ))

  return (
    <div id='best-seller-section'>
      <h2>Our Bestseller</h2>
      <div id='products-cards'>{productsCards}</div>
    </div>
  )
}
export default BestSeller
