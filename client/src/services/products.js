import axios from 'axios'
const baseUrl = '/api/products'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  const token = await (await axios.get('/api/auth/token')).data

  axios.interceptors.request.use(config => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })

  return response.data
}

export default { getAll }
