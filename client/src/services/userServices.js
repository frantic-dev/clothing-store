import axios from 'axios'

const rememberUser = async () => {
  const response = await axios.get('/api/rememberUser')
  return response.data
}

const deleteTokens = async () => {
  const response = await axios.get('/api/delete-auth')
  return response.data
}

const getCookies = async () => {
  const response = await axios.get('/api/auth')
  return response.data
}

const loginUser = async (loginData) => {
  const response = await axios.post('/api/login', loginData)
  return response.data
}

const signupUser = async (signupData) => {
  const response = await axios.post('/api/signup', signupData)
  return response.data
}

export default { rememberUser, deleteTokens, getCookies, loginUser, signupUser }
