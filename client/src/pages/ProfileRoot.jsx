import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { setPendingAction } from '../reducers/pendingActionReducer'
import ProfileNav from '../components/ProfileNav'
import '../styles/pages/profile-page.scss'

function ProfileRoot() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userLoggedIn = Object.keys(user).length !== 0

  useEffect(() => {
    if (!userLoggedIn) {
      dispatch(
        setPendingAction({ name: 'redirectToPage', page: '/profile/wishlist' })
      )
    }
  }, [])
  return (
    <div id='profile-container'>
      <h2>My Profile</h2>
      <div id='profile-page'>
        <ProfileNav />
        <div id='profile-content'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default ProfileRoot
