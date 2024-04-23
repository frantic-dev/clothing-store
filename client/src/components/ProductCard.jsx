import WhiteButton from './WhiteButton'
import '../styles/components/product-card.scss'
import HeartIcon from '../assets/heart-icon.svg?react'
import { useState } from 'react'

function ProductCard(props) {
  const [showElements, setShowElements] = useState(false)

  return (
    // show white button and heart icon when hovering over product card
    <div
      className='product-card'
      onMouseOver={() => setShowElements(true)}
      onMouseOut={() => setShowElements(false)}
    >
      <div>
        <img src={props.img} />
        {showElements && <WhiteButton text='Add to Cart' />}
        {showElements && (
          <div className='heart-icon'>
            <HeartIcon />
          </div>
        )}
      </div>
      <h3>{props.title}</h3>
      <div className='description'>{props.description}</div>
      <div>
        {props.price}
        <span className='previous-price'>{props.previousPrice}</span>
      </div>
    </div>
  )
}
export default ProductCard
