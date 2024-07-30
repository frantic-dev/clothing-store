import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useLocation } from 'react-router-dom'
import { setPendingAction } from '../reducers/pendingActionReducer'
import ProfileNav from '../components/ProfileNav'
import '../styles/pages/profile-page.scss'

function ProfileRoot() {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userLoggedIn = Object.keys(user).length !== 0

  const url = useLocation().pathname
  console.log(url);

  function handleNavStyle() {
    const target = url.split('/')[2]
    console.log(target);
    const profileLinks = document.getElementById('links').children
    for (let link of profileLinks) {
      if (link.textContent.includes(target)) {
        link.className = 'current-profile-link'
      } else {
        link.className = ''
      }
    }
  }

  
  
  useEffect(() => {
    // if (!userLoggedIn) {
    //   dispatch(
    //     setPendingAction({ name: 'redirectToPage', page: '/profile/wishlist' })
    //   )
    // }
    handleNavStyle()
  }, [url])
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
