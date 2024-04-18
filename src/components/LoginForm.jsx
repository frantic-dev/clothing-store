function LoginForm() {
  return (
    <div>
      <h2 className='form-title'>Welcome👋</h2>
      <div className='form-instructions'>Please login here</div>

      <form className='form' >

        <label htmlFor='email'>email address</label>
        <input
          type='text'
          name='email'
          id='email'
        />
        
        <label htmlFor='password'>password</label>
        <input
          type='password'
          name='password'
          id='password'
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
