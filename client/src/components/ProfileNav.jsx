import { useSelector } from 'react-redux'
import '../styles/components/profile-nav.scss'
import UserIcon from '../assets/user-icon.svg?react'
import { Link } from 'react-router-dom'

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
        <Link to='/profile/personal-info'>
          <div>personal information</div>
        </Link>
        <Link to='/profile/wishlist'>
          <div>my wishlist</div>
        </Link>
        <Link to='/profile/cart'>
          <div>my cart</div>
        </Link>
        <Link to='/profile/addresses'>
          <div>my addresses</div>
        </Link>
        <Link to='/profile/settings'>
          <div>settings</div>
        </Link>
      </div>
    </div>
  )
}

export default ProfileNav
