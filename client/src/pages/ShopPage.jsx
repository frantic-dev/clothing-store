import CategoryFilter from '../components/CategoryFilter'
import PriceFilter from '../components/PriceFilter'
import '../styles/pages/shop-page.scss'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
import { Link } from 'react-router-dom'
import DownArrowIcon from '../assets/down-arrow-icon.svg?react'
import { useEffect, useState } from 'react'
import { resetFilters } from '../reducers/filtersReducer'

function ShopPage() {
  const dispatch = useDispatch()
  const productsData = useSelector(state => state.products)
  const filters = useSelector(state => state.filter)
  const [currentPage, setCurrentPage] = useState(1)
  const productsPerPage = 9

  // reset filters every time you leave page and come back
  useEffect(() => {
    dispatch(resetFilters())
  }, [])

  function displayPageProducts(products, currentPage, productsPerPage) {
    const lastProductIndex = currentPage * productsPerPage
    const firstProductIndex = lastProductIndex - productsPerPage

    return products.slice(firstProductIndex, lastProductIndex)
  }

  function filterProducts(products, filters, maxPrice) {
    if (filters.length > 0) {
      return products.filter(
        product =>
          filters.includes(product.category) && product.price <= maxPrice
      )
    } else return products.filter(product => product.price <= maxPrice)
  }

  const filteredProducts = filterProducts(
    productsData,
    filters.categories,
    filters.maxPrice
  )
  const productsToDisplay = displayPageProducts(
    filteredProducts,
    currentPage,
    productsPerPage
  )

  const pageNumbers = []
  for (
    let i = 1;
    i <= Math.ceil(filteredProducts.length / productsPerPage);
    i++
  ) {
    pageNumbers.push(i)
  }

  function handleButtonClick(number) {
    setCurrentPage(number)
    window.scrollTo(0, 0)
  }

  const displayPageNumbers = pageNumbers.map(number => {
    let checked = ''
    if (number === currentPage) {
      checked = ' checked'
    }
    return (
      <button
        key={`page-${number}`}
        className={`page-number${checked}`}
        onClick={() => handleButtonClick(number)}
      >
        {number}
      </button>
    )
  })

  const productsCards = productsToDisplay.map(product => (
    <ProductCard
      key={`product-${product.id}`}
      product={product}
    />
  ))
  return (
    <div id='shop-page'>
      <div id='shop-nav'>
        <Link to={'/'}>Home </Link>
        <DownArrowIcon id='right-arrow-icon' />
        Shop
      </div>
      <div id='filters'>
        <CategoryFilter setCurrentPage={setCurrentPage} />
        <PriceFilter setCurrentPage={setCurrentPage} />
      </div>
      <div id='products'>{productsCards}</div>
      <div id='page-numbers'>{displayPageNumbers}</div>
    </div>
  )
}

export default ShopPage
