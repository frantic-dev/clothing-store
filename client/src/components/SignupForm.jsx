import { useState } from 'react'

function SignupForm() {
  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    agreeToTerms: false,
  })

  function handleChange(e) {
    setSignupData({ ...signupData, [e.target.name]: e.target.value })
  }

  function toggleAgreement() {
    setSignupData(data => ({ ...data, agreeToTerms: !data.agreeToTerms }))
  }

  return (
    <div>
      <h2 className='form-title'>create new account</h2>
      <div className='form-instructions'>Please enter details</div>

      <form className='form'>
        <label htmlFor='first-name'>first name</label>
        <input
          type='text'
          name='firstName'
          id='first-name'
          placeholder='Jane'
          value={signupData.firstName}
          onChange={handleChange}
        />

        <label htmlFor='last-name'>last name</label>
        <input
          type='text'
          name='lastName'
          id='last-name'
          placeholder='Doe'
          value={signupData.lastName}
          onChange={handleChange}
        />

        <label htmlFor='signup-email'>email address</label>
        <input
          type='text'
          name='email'
          id='signup-email'
          placeholder='example@gmail.com'
          value={signupData.email}
          onChange={handleChange}
        />

        <label htmlFor='signup-password'>password</label>
        <input
          type='password'
          name='password'
          id='signup-password'
          placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;'
          value={signupData.password}
          onChange={handleChange}
        />

        <div>
          <label>
            <input
              type='checkbox'
              onClick={toggleAgreement}
            />{' '}
            i agree to the terms & conditions
          </label>
        </div>

        <button className='form-btn'>Signup</button>
      </form>
    </div>
  )
}
export default SignupForm
