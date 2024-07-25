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
        <div>
          <Link to='/profile/personal-info'>personal information</Link>
        </div>
        <div>
          <Link to='/profile/wishlist'>my wishlist</Link>
        </div>
        <div>
          <Link to='/profile/cart'>my cart</Link>
        </div>
        <div>
          <Link to='/profile/addresses'>my addresses</Link>
        </div>
        <div>
          <Link to='/profile/settings'>settings</Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileNav
