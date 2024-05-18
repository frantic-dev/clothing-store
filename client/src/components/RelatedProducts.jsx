import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'

function RelatedProducts(props) {
  const products = useSelector(state => state.products)
  const productIndex = products.findIndex(
    product => product.id === props.product.id
  )

  let relatedProducts = products.slice(productIndex + 1, productIndex + 5)

  if (relatedProducts.length < 4) {
    relatedProducts = products.slice(productIndex - 4, productIndex)
  }

  const displayProducts = relatedProducts.map((product, index) => (
    <ProductCard
      key={`related-product-${index}`}
      product={product}
    />
  ))
  return (
    <div id='related-products'>
      <h2>Related Products</h2>
      <div id='products'>{displayProducts}</div>
    </div>
  )
}
export default RelatedProducts
