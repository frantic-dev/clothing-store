import axios from 'axios'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../reducers/userReducer'

function LoginForm() {
  const dispatch = useDispatch()

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  })
  const navigate = useNavigate()

  function handleChange(e) {
    setLoginData({ ...loginData, [e.target.name]: e.target.value })
  }

  function toggleRememberMe() {
    setLoginData(data => ({
      ...data,
      rememberMe: !data.rememberMe,
    }))
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const response = await axios.post('/api/login', loginData)
    console.log(response.data)
    if (response.data.redirect) {
      dispatch(setUser({username: response.data.username}))
      navigate('/')
    }
  }
  return (
    <div>
      <h2 className='form-title'>Welcome👋</h2>
      <div className='form-instructions'>Please login here</div>

      <form
        className='form'
        onSubmit={handleSubmit}
      >
        <label htmlFor='login-email'>email address</label>
        <input
          type='text'
          name='email'
          id='login-email'
          placeholder='example@gmail.com'
          value={loginData.email}
          onChange={handleChange}
        />

        <label htmlFor='login-password'>password</label>
        <input
          type='password'
          name='password'
          id='login-password'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          value={loginData.password}
          onChange={handleChange}
        />

        <div>
          <label>
            <input
              type='checkbox'
              name='rememberMe'
              onClick={toggleRememberMe}
            />
            remember me
          </label>
          <Link to={'/forgot-password'}>forgot password</Link>
        </div>

        <button className='form-btn'>Login</button>
      </form>
    </div>
  )
}
export default LoginForm
