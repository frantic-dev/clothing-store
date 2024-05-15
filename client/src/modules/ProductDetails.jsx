import '../styles/components/product-details.scss'
import StarIcon from '../assets/star-icon.svg?react'
import LongBlackBtn from '../components/LongBlackBtn'

function ProductDetails({ product }) {
  const stars = Array.from({ length: 5 }).map((star, index) => {
    return (
      <StarIcon
        key={`product-star-${index}`}
        className={`star${index + 1 <= product.rating.rate ? ' checked' : ''}`}
      />
    )
  })

  return (
    <div id='product-details'>
      <img src={product.image} />
      <div>
        <h2>{product.title}</h2>

        <div id='rating'>
          <div id='stars-rating'>{stars}</div>
          <div id='rate'>
            {product.rating.rate} ({product.rating.count} Reviews)
          </div>
        </div>
        <div id='price'>{product.price}$</div>
        <p>{product.description}</p>
        <LongBlackBtn content='Add to Cart' />
      </div>
    </div>
  )
}
export default ProductDetails
