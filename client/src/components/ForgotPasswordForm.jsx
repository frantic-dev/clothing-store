import { Link } from 'react-router-dom'
import BackIcon from '../assets/less-than-icon.png'

function ForgotPasswordForm() {
  return (
    <div>
      <div className='form-back-btn'>
        <img src={BackIcon} />
        <Link to={'/login'}>Back</Link>
      </div>
      <h2 className='form-title'>Forgot Password</h2>
      <div className='form-instructions'>
        Enter your registered email address. We&apos;ll send you a code to reset
        your password.{' '}
      </div>

      <form className='form'>
        <label htmlFor='forgot-password-email'>email address</label>
        <input
          type='text'
          name='forgot-password-email'
          id='forgot-password-email'
          placeholder='example@gmail.com'
        />

        <button className='form-btn'>Send OTP</button>
      </form>
    </div>
  )
}
export default ForgotPasswordForm
