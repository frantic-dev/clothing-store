function SignupForm() {
  return (
    <div>
      <h2 className="form-title">create new account</h2>
      <div className="form-instructions">Please enter details</div>

      <form className="form">
        <label htmlFor='first-name'>email address</label>
        <input
          type='text'
          name='first-name'
          id='first-name'
        />

        <label htmlFor='last-name'>last name</label>
        <input
          type='password'
          name='last-name'
          id='last-name'
        />

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
            <input type='checkbox' /> i agree to the terms & conditions
          </label>
        </div>

        <button className="form-btn">Signup</button>
      </form>
    </div>
  )
}
export default SignupForm
