// import { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import PriceFilter from '../components/PriceFilter'
import '../styles/pages/shop-page.scss'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
function ShopPage() {
  const productsData = useSelector(state => state.products)

  const productsCards = productsData.map((product) => (
    <ProductCard
      key={`product-${product.id}`}
      img={product.image}
      title={product.title}
      price={product.price}
    />
  ))
  return (
    <div id='shop-page'>
      <div id='filters'>
        <CategoryFilter />
        <PriceFilter />
      </div>
      <div id="products">
        {productsCards}
      </div>
    </div>
  )
}

export default ShopPage
