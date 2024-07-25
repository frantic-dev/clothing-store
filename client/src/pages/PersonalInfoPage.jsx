import { useEffect } from 'react'
import '../styles/pages/personal-info-page.scss'

function PersonalInfoPage() {
  useEffect(() => {
    const profileLinks = document.getElementById('links').children
    for (let link of profileLinks) {
      console.log(link.textContent)
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
        />
      </label>
      <label htmlFor='lastName'>
        last name
        <input
          type='text'
          id='lastName'
        />
      </label>
      <label htmlFor='phone'>
        phone number
        <input
          type='number'
          id='phone'
        />
      </label>
      <label htmlFor='email'>
        email address
        <input
          type='email'
          id='email'
        />
      </label>
      <label htmlFor='address'>
        address
        <input
          type='text'
          id='address'
        />
      </label>
    </form>
  )
}

export default PersonalInfoPage
