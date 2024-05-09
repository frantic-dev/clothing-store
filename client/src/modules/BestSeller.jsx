import { useEffect } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { initializeProducts } from '../reducers/productsReducer'

function BestSeller() {
  const productsData = useSelector(state => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeProducts())
  }, [])

  function getLimitedProducts(products) {
    const shuffledProducts = [...products].sort(() => Math.random() - 0.5)
    return shuffledProducts.slice(0,8)
  }
  
  const productsCards = getLimitedProducts(productsData).map(product => (
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
