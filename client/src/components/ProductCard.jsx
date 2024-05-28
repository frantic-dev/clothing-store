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
  const [wishlist, setWishlist] = useState([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  function preventReferral(e) {
    const element = e.target.className
    if (element === 'heart-icon' || element === 'white-btn') {
      e.preventDefault()
    }
  }

  function addToWishlist() {
    if (Object.keys(userData).length === 0) {
      navigate('/login')
      dispatch(
        setPendingAction({
          action: 'addToWishlist',
          product_id: props.product.id,
        })
      )
    }
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
