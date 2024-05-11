// import { useState } from 'react'
import CategoryFilter from '../components/CategoryFilter'
import PriceFilter from '../components/PriceFilter'
import '../styles/pages/shop-page.scss'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import DownArrowIcon from '../assets/down-arrow-icon.svg?react'

function ShopPage() {
  const productsData = useSelector(state => state.products)

  const productsCards = productsData.map(product => (
    <ProductCard
      key={`product-${product.id}`}
      img={product.image}
      title={product.title}
      price={product.price}
    />
  ))
  return (
    <div id='shop-page'>
      <div id='shop-nav'>
        <Link to={'/shop'}>Shop </Link>
        <DownArrowIcon id='right-arrow-icon' />
        All Products
      </div>
      <div id='filters'>
        <CategoryFilter />
        <PriceFilter />
      </div>
      <div id='products'>{productsCards}</div>
    </div>
  )
}

export default ShopPage
