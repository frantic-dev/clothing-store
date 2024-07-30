import { useEffect, useState } from 'react'
import '../styles/pages/personal-info-page.scss'
import { useSelector } from 'react-redux'

function PersonalInfoPage() {
  const user = useSelector(state => state.user)
  const [formData, setFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    number: user.number,
    address: user.address,
  })
  function handleChange(e) {
    setFormData(formData => ({ ...formData, [e.target.id]: e.target.value }))
  }

  useEffect(() => {
    const profileLinks = document.getElementById('links').children

    for (let link of profileLinks) {
      if (link.textContent.includes('personal')) {
        link.className = 'current-profile-link'
      } else {
        link.className = ''
      }
    }
  })

  return (
    <form id='personal-info-form'>
      <label htmlFor='firstName'>
        first name
        <input
          type='text'
          id='firstName'
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='lastName'>
        last name
        <input
          type='text'
          id='lastName'
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='number'>
        phone number
        <input
          type='number'
          id='number'
          value={formData.number}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='email'>
        email address
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor='address'>
        address
        <input
          type='text'
          id='address'
          value={formData.address}
          onChange={handleChange}
        />
      </label>
    </form>
  )
}

export default PersonalInfoPage
