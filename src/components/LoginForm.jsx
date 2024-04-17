import '../styles/login-form.scss'
function LoginForm() {
  return (
    <div>
      <h2 id='login-welcome'>Welcome👋</h2>
      <div id='login-form-instructions'>Please login here</div>

      <form id='login-form'>

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

        <button id='login-btn'>Login</button>

      </form>
    </div>
  )
}
export default LoginForm
