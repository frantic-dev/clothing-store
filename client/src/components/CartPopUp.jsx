import { useDispatch, useSelector } from 'react-redux'
import '../styles/components/cart-pop-up.scss'
import CartItemCard from './CartItemCard'
import {
  addToCartTotal,
  initializeCartTotal,
} from '../reducers/cartTotalReducer'
import CartTotal from './CartTotal'

function CartPopUp() {
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const products = useSelector(state => state.products)
  const cartItems = products.filter(product =>
    cart.includes(product.id.toString())
  )

  dispatch(initializeCartTotal())

  const displayCartItems = cartItems.map((item, index) => {
    dispatch(addToCartTotal(item.price))
    return (
      <CartItemCard
        product={item}
        key={`cart-item-${index}`}
      />
    )
  })
  if (cartItems.length > 0) {
    return (
      <div id='cart-pop-up'>
        <div id='total-items'>
          You have {cartItems.length} item{cartItems.length === 1 ? '' : 's'} in
          your cart
        </div>
        <div id='items'>{displayCartItems}</div>
        <div id='subtotal'>
          <div>Subtotal</div>
          <CartTotal />
        </div>
      </div>
    )
  } else return <div id='cart-pop-up'>Your cart is empty</div>
}

export default CartPopUp
