import { useState } from 'react'
import DownArrow from '../assets/down-arrow-icon.svg?react'
import { useDispatch } from 'react-redux'
import { addFilter, removeFilter } from '../reducers/filtersReducer'

function CategoryFilter() {
  const dispatch = useDispatch()
  const [filters, setFilters] = useState({
    men: false,
    women: false,
    jewelry: false,
    electronics: false,
  })

  function handleClick(e) {
    const filterName = e.target.name
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
        onClick={handleClick}
      />
      <label htmlFor='men'>Men</label>
      <input
        type='checkbox'
        name='women'
        id='women'
        onClick={handleClick}
      />
      <label htmlFor='women'>Women</label>
      <input
        type='checkbox'
        name='jewelery'
        id='jewelry'
        onClick={handleClick}
      />
      <label htmlFor='jewelry'>Jewelry</label>
      <input
        type='checkbox'
        name='electronics'
        id='electronics'
        onClick={handleClick}
      />
      <label htmlFor='electronics'>Electronics</label>
    </div>
  )
}

export default CategoryFilter
