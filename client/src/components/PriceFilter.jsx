import { useState } from 'react'
import DownArrow from '../assets/down-arrow-icon.svg?react'

function PriceFilter() {
  const [price, setPrice] = useState(250)
  return (
    <div id='price-filter' className='filter'>
      <div>
        <h3>Filter by Price</h3>
        <DownArrow />
      </div>
      <div>Price: $0 - ${price}</div>
      <br />
      <input
        type='range'
        name='price'
        id='price'
        min={0}
        max={300}
        step={10}
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
    </div>
  )
}
export default PriceFilter
