import axios from 'axios'
const baseUrl = '/api/products'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const getProduct = async product_id => {
  const response = await axios.get(`/api/products/${product_id}`)
  return response.data
}

export default { getAll, getProduct }
