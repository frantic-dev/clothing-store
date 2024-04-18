function LoginForm() {
  return (
    <div>
      <h2 className='form-title'>Welcome👋</h2>
      <div className='form-instructions'>Please login here</div>

      <form className='form' >

        <label htmlFor='login-email'>email address</label>
        <input
          type='text'
          name='login-email'
          id='login-email'
          placeholder="example@gmail.com"
        />
        
        <label htmlFor='login-password'>password</label>
        <input
          type='password'
          name='login-password'
          id='login-password'
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
        />

        <div>
          <label>
            <input type='checkbox' /> remember me
          </label>
          <a href=''> forgot password?</a>
        </div>

        <button className='form-btn'>Login</button>

      </form>
    </div>
  )
}
export default LoginForm
