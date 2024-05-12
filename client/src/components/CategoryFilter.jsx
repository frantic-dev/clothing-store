import { useState } from 'react'
import DownArrow from '../assets/down-arrow-icon.svg?react'
import { useDispatch } from 'react-redux'
import { addFilter, removeFilter } from '../reducers/filtersReducer'

function CategoryFilter(props) {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    jewelery: false,
    electronics: false,
  })

  function handleClick(e) {
    const filterName = e.target.name
    // go back to first page whenever clicking a filter category
    props.setCurrentPage(1)
    setFilters({ ...filters, [filterName]: !filters[filterName] })
    if (filters[filterName]) {
      dispatch(removeFilter(filterName))
    } else {
      dispatch(addFilter(filterName))
    }
  }

  return (
    <div
      id='category-filter'
      className='filter'
    >
      <div>
        <h3>Product Categories</h3>
        <DownArrow />
      </div>
      <input
        type='checkbox'
        name='men'
        id='men'
        onChange={handleClick}
        checked={filters.men}
      />
      <label htmlFor='men'>Men</label>
      <input
        type='checkbox'
        name='women'
        id='women'
        onChange={handleClick}
        checked={filters.women}
      />
      <label htmlFor='women'>Women</label>
      <input
        type='checkbox'
        name='jewelery'
        id='jewelry'
        onChange={handleClick}
        checked={filters.jewelery}
      />
      <label htmlFor='jewelry'>Jewelry</label>
      <input
        type='checkbox'
        name='electronics'
        id='electronics'
        onChange={handleClick}
        checked={filters.electronics}
      />
      <label htmlFor='electronics'>Electronics</label>
    </div>
  )
}

export default CategoryFilter