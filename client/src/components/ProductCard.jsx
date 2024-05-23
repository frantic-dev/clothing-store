import WhiteButton from './WhiteButton'
import '../styles/components/product-card.scss'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import TransparentHeartIcon from '../assets/transparent-heart-icon.png'
import RedHeartIcon from '../assets/red-heart-icon.png'

function ProductCard(props) {
  const [showElements, setShowElements] = useState(false)
  const [wishlist, setWishlist] = useState([])

  function preventReferral(e) {
    const element = e.target.className
    if (element === 'heart-icon' || element === 'white-btn') {
      e.preventDefault()
    }
    // console.log(element)
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
            <>
              {wishlist.some(product => product.id === props.product.id) ? (
                <img
                  src={RedHeartIcon}
                  className='heart-icon'
                />
              ) : (
                <img
                  src={TransparentHeartIcon}
                  className='heart-icon'
                />
              )}
            </>
          )}
        </div>
        <h3>{props.product.title}</h3>
        <div>{props.product.price} $</div>
      </div>
    </Link>
  )
}
export default ProductCard
