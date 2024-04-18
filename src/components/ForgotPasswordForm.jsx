import BackIcon from '../assets/less-than-icon.png'

function ForgotPasswordForm() {
  return (
    <div>
      <div className="form-back-btn">
        <img src={BackIcon} />
        <a href="">Back</a>
      </div>
      <h2 className='form-title'>Forgot Password</h2>
      <div className='form-instructions'>Enter your registered email address. We&apos;ll send you a code to reset your password. </div>

      <form className='form'>
        <label htmlFor='email'>email address</label>
        <input
          type='text'
          name='email'
          id='email'
        />

        <button className='form-btn'>Send OTP</button>
      </form>
    </div>
  )
}
export default ForgotPasswordForm
