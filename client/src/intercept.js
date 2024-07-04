import axios from 'axios'

export default async function addInterceptor() {
  const cookies = await (await axios.get('/api/auth')).data
  const validCookies = Object.keys(cookies).length > 0

  axios.interceptors.request.use(config => {
    if (validCookies) {
      config.headers.Authorization = `Bearer ${cookies.access_token_cookie}`
      config.headers['X-CSRF-TOKEN'] = cookies.csrf_access_token
    }
    return config
  })
}
