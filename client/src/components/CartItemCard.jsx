function CartItemCard(props) {
  return (
    <div className='cart-item'>
      <img src={props.product.image} />
      <div>
        <div className='title'>{props.product.title}</div>
        <div className='price'>{props.product.price}$</div>
      </div>
    </div>
  )
}
export default CartItemCard
