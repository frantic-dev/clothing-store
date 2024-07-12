import axios from 'axios'

const getCart = async () => {
  const response = await axios.get('/api/cart')
  return response.data
}

const addToCart = async product_id => {
  const response = await axios.post('/api/cart', product_id)
  return response.data
}

const removeFromCart = async updatedCart => {
  const response = await axios.put('/api/cart', updatedCart)
  return response.data
}

export default { getCart, addToCart, removeFromCart }
