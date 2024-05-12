import DownArrow from '../assets/down-arrow-icon.svg?react'
import { useDispatch, useSelector } from 'react-redux'
import { setMaxPrice } from '../reducers/filtersReducer'

function PriceFilter() {
  const maxPrice = useSelector(state => state.filter.maxPrice)
  const dispatch = useDispatch()
  
  return (
    <div id='price-filter' className='filter'>
      <div>
        <h3>Filter by Price</h3>
        <DownArrow />
      </div>
      <div>Price: $0 - ${maxPrice}</div>
      <br />
      <input
        type='range'
        name='price'
        id='price'
        min={0}
        max={1200}
        step={10}
        value={maxPrice}
        onChange={e => dispatch(setMaxPrice(e.target.value))}
      />
    </div>
  )
}
export default PriceFilter
