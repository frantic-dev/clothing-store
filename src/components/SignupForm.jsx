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
          placeholder="Jane"
        />

        <label htmlFor='last-name'>last name</label>
        <input
          type='password'
          name='last-name'
          id='last-name'
          placeholder="Doe"
        />

        <label htmlFor='signup-email'>email address</label>
        <input
          type='text'
          name='signup-email'
          id='signup-email'
          placeholder="example@gmail.com"
        />

        <label htmlFor='signup-password'>password</label>
        <input
          type='password'
          name='signup-password'
          id='signup-password'
          placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;"
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
