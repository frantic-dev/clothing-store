let wishlist = localStorage.getItem('wishlist')
  ? JSON.parse(localStorage.getItem('wishlist'))
  : []

const addToWishlist = product => {
  wishlist.push(product)
  localStorage.setItem('wishlist', JSON.stringify(wishlist))
}

export default { addToWishlist }
