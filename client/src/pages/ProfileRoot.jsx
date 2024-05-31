import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { setPendingAction } from '../reducers/pendingActionReducer'

function ProfileRoot() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const userLoggedIn = Object.keys(user).length !== 0

  useEffect(() => {
    if (!userLoggedIn) {
      navigate('/login')
      dispatch(
        setPendingAction({ name: 'redirectToPage', page: '/profile/wishlist' })
      )
    }
  }, [])
  return (
    <div>
      <div id='profile-page'>
        <Outlet />
      </div>
    </div>
  )
}

export default ProfileRoot
