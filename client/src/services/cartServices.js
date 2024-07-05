import axios from 'axios'

const getCart = async () => {
  const response = await axios.get('/api/cart')
  return response.data
}

const addToCart = async product_id => {
  const response = await axios.post('/api/cart', product_id)
  return response.data
}

export default { getCart, addToCart }
