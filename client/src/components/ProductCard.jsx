import WhiteButton from './WhiteButton'
import '../styles/components/product-card.scss'
import HeartIcon from '../assets/heart-icon.svg?react'
import { useState } from 'react'

function ProductCard(props) {
  const [hideElements, setHideElements] = useState(true)

  return (
    <div
      className='product-card'
      onMouseOver={() => setHideElements(false)}
      onMouseOut={() => setHideElements(true)}
    >
      <div>
        <img src={props.img} />
        <WhiteButton
          text='Add to Cart'
          hide={hideElements}
        />
        <div
          className='heart-icon'
          style={{ display: hideElements ? 'none' : 'flex' }}
        >
          <HeartIcon />
        </div>
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
