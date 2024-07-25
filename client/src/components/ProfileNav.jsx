import { useSelector } from 'react-redux'
import '../styles/components/profile-nav.scss'
import UserIcon from '../assets/user-icon.svg?react'

function ProfileNav() {
  const user = useSelector(state => state.user)
  const firstName = user.firstName
  const lastName = user.lastName

  return (
    <div id='profile-nav'>
      <h3>
        <UserIcon />
        {firstName} {lastName}
      </h3>
      <div id='links'>
        <div>Personal Information</div>
        <div>My wishlist</div>
        <div>my cart</div>
        <div>my addresses</div>
        <div>settings</div>
      </div>
    </div>
  )
}

export default ProfileNav
