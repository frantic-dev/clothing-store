import WhiteButton from './WhiteButton'
import '../styles/components/product-card.scss'
import HeartIcon from '../assets/heart-icon.svg?react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import storageServices from '../localStorage.js'

function ProductCard(props) {
  const [showElements, setShowElements] = useState(true)

  function preventReferral(e) {
    const element = e.target.tagName
    if (element === 'svg' || element === 'BUTTON') {
      e.preventDefault()
    }
  }
  function handleClick() {
    storageServices.addToWishlist(props.product)
  }

  return (
    // show white button and heart icon when hovering over product card
    <Link to={`/shop/${props.product.id}`}>
      <div
        className='product-card'
        onMouseOver={() => setShowElements(true)}
        onMouseOut={() => setShowElements(false)}
        onClick={preventReferral}
      >
        <div>
          <img src={props.product.image} />
          {showElements && <WhiteButton text='Add to Cart' />}
          {showElements && (
            <div
              className='heart-icon'
              onClick={handleClick}
            >
              <HeartIcon />
            </div>
          )}
        </div>
        <h3>{props.product.title}</h3>
        <div>{props.product.price} $</div>
      </div>
    </Link>
  )
}
export default ProductCard
