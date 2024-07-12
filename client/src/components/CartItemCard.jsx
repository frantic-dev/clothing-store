import { useDispatch } from 'react-redux'
import TrashIcon from '../assets/trash-icon.svg?react'
import { setPendingAction } from '../reducers/pendingActionReducer'

function CartItemCard(props) {
  const dispatch = useDispatch()

  function removeFromCart() {
    dispatch(
      setPendingAction({
        name: 'removeFromCart',
        product_id: props.product.id,
      })
    )
  }
  return (
    <>
      <div className='cart-item'>
        <img src={props.product.image} />
        <div>
          <div className='title'>{props.product.title}</div>
          <div className='price'>{props.product.price}$</div>
        </div>
        <div onClick={removeFromCart}>
          <TrashIcon className='trash-icon' />
        </div>
      </div>
      <hr className='cart-popup-break' />
    </>
  )
}
export default CartItemCard
