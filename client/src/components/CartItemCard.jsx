import TrashIcon from '../assets/trash-icon.svg?react'

function CartItemCard(props) {
  return (
    <div className='cart-item'>
      <img src={props.product.image} />
      <div>
        <div className='title'>{props.product.title}</div>
        <div className='price'>{props.product.price}$</div>
      </div>
      <TrashIcon className='trash-icon' />
    </div>
  )
}
export default CartItemCard
