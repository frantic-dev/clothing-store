import axios from 'axios'

export default async function addInterceptor() {
  const token = await (await axios.get('/api/auth/token')).data

  axios.interceptors.request.use(config => {
    if (token !== '') {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  })
}
