import WhiteButton from './WhiteButton'
import '../styles/components/product-card.scss'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import TransparentHeartIcon from '../assets/transparent-heart-icon.png'
import RedHeartIcon from '../assets/red-heart-icon.png'
import { useDispatch, useSelector } from 'react-redux'
import { setPendingAction } from '../reducers/pendingActionReducer'

function ProductCard(props) {
  const [showElements, setShowElements] = useState(false)
  const userData = useSelector(state => state.user)
  const wishlist = useSelector(state => state.wishlist)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const noUser = Object.keys(userData).length === 0

  function productInWishlist() {
    return wishlist.some(id => id === String(props.product.id))
  }

  function preventReferral(e) {
    const element = e.target.className
    if (element === 'heart-icon' || element === 'white-btn') {
      e.preventDefault()
    }
  }

  function addToWishlist() {
    if (noUser) {
      navigate('/login')
    }
    dispatch(
      setPendingAction({
        name: 'addToWishlist',
        product_id: props.product.id,
      })
    )
  }

  function removeFromWishlist() {
    dispatch(
      setPendingAction({
        name: 'removeFromWishlist',
        product_id: props.product.id,
      })
    )
  }

  function addToCart() {
    if (noUser) {
      navigate('/login')
    }
    dispatch(
      setPendingAction({
        name: 'addToCart',
        product_id: props.product.id,
      })
    )
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
          {showElements && (
            <WhiteButton
              text='Add to Cart'
              handleClick={addToCart}
            />
          )}
          {showElements && (
            <>
              {productInWishlist() ? (
                <img
                  src={RedHeartIcon}
                  className='heart-icon'
                  onClick={removeFromWishlist}
                />
              ) : (
                <img
                  src={TransparentHeartIcon}
                  className='heart-icon'
                  onClick={addToWishlist}
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
