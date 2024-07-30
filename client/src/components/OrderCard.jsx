import '../styles/components/order-card.scss'

function OrderCard(props) {
  return (
    <div className='order-card'>
      <div className='inner-container'>
        <div>
          <img src={props.product.image} />
          <div className='delivered'>Delivered</div>
        </div>
        <div className='details'>
          <div className='title'>{props.product.title}</div>
          <div className='description'>{props.product.description}</div>...
        </div>
        <div className='price'>{props.product.price}$</div>
      </div>
    </div>
  )
}
export default OrderCard
