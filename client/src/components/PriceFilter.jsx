import DownArrow from '../assets/down-arrow-icon.svg?react'
import { useDispatch, useSelector } from 'react-redux'
import { setMaxPrice } from '../reducers/filtersReducer'
import { useState } from 'react'

function PriceFilter(props) {
  const maxPrice = useSelector(state => state.filter.maxPrice)
  const dispatch = useDispatch()
  const [hide, setHide] = useState(false)

  function handleChange(e) {
    // return to first shop page
    props.setCurrentPage(1)
    dispatch(setMaxPrice(e.target.value))
  }

  return (
    <div className='filter'>
      <div onClick={() => setHide(!hide)}>
        <h3>Filter by Price</h3>
        <DownArrow className={hide && 'flip-arrow-up'} />
      </div>
      <div
        id='price-filter'
        className={hide && 'hide'}
      >
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
          onChange={e => handleChange(e)}
        />
      </div>
    </div>
  )
}
export default PriceFilter
