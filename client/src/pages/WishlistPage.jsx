import { useSelector } from 'react-redux'
import '../styles/pages/wishlist-page.scss'
import ProductCard from '../components/ProductCard'
import { useEffect } from 'react'

function WishlistPage() {
  const wishlist = useSelector(state => state.wishlist)
  const products = useSelector(state => state.products)

  const wishlistProducts = products.filter(product =>
    wishlist.includes(product.id.toString())
  )

  useEffect(() => {
    const profileLinks = document.getElementById('links').children
    for (let link of profileLinks) {
      if (link.textContent.includes('wishlist')) {
        link.className = 'current-profile-link'
      } else {
        link.className = ''
      }
    }
  })

  const displayWishlistProducts = wishlistProducts.map((product, index) => (
    <ProductCard
      key={`wishlist-${index}`}
      product={product}
    />
  ))
  return (
    <div>
      <div id='wishlist-page'>
        {displayWishlistProducts.length === 0 ? (
          <div id='empty-wishlist'>empty wishlist</div>
        ) : (
          displayWishlistProducts
        )}
      </div>
    </div>
  )
}
export default WishlistPage
