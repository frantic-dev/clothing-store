import { useEffect, useState } from 'react'
import '../styles/pages/personal-info-page.scss'
import { useDispatch, useSelector } from 'react-redux'
import userServices from '../services/userServices'
import { setUser } from '../reducers/userReducer'
import { displayNotification } from '../reducers/notificationReducer'

function PersonalInfoPage() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  let [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    address: '',
  })

  useEffect(() => {
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      number: user.number || '',
      address: user.address || '',
    })
  }, [user])

  function handleChange(e) {
    setFormData(formData => ({ ...formData, [e.target.id]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const updatedUserData = await userServices.updateUser(formData)
    if (updatedUserData.success) {
      dispatch(setUser({ ...updatedUserData }))
      dispatch(
        displayNotification({
          type: 'pass',
          content: 'Your profile has been updated successfully',
        })
      )
    }
  }

  return (
    <form
      id='personal-info-form'
      onSubmit={handleSubmit}
    >
      <label htmlFor='firstName'>
        first name
        <input
          type='text'
          id='firstName'
          value={formData.firstName}
          onChange={handleChange}
          required
        />
      </label>
      <label htmlFor='lastName'>
        last name
        <input
          type='text'
          id='lastName'
          value={formData.lastName}
          onChange={handleChange}
          required
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
      {/* <label htmlFor='email'>
        email address
        <input
          type='email'
          id='email'
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label> */}
      <label htmlFor='address'>
        address
        <input
          type='text'
          id='address'
          value={formData.address}
          onChange={handleChange}
        />
      </label>
      <button>Edit</button>
    </form>
  )
}

export default PersonalInfoPage
