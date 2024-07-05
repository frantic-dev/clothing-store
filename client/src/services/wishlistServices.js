import axios from 'axios'

const getWishlist = async () => {
  const response = await axios.get('/api/wishlist')
  return response.data
}

const addToWishlist = async product_id => {
  const response = await axios.post('/api/wishlist', product_id)
  return response.data
}

const removeFromWishlist = async updatedWishlist => {
  const response = await axios.put('/api/wishlist', updatedWishlist)
  return response.data
}
export default { getWishlist, addToWishlist, removeFromWishlist }
