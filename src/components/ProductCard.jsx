import WhiteButton from './WhiteButton'
import '../styles/components/product-card.scss'
function ProductCard(props) {
  return (
    <div className='product-card'>
      <div>
        <img src={props.img} />
        <WhiteButton text='Add to Cart' />
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
