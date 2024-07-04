import axios from 'axios'

const getCart = async () => {
  const response = await axios.get('/api/cart')
  return response.data
}

export default getCart
