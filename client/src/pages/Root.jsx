import { Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { initializeProducts } from '../reducers/productsReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  performPendingAction,
  setPendingAction,
} from '../reducers/pendingActionReducer'
import { initializeWishlist } from '../reducers/wishlistReducer'
import { initializeCart } from '../reducers/cartReducer'
import { setUser } from '../reducers/userReducer'
import addInterceptor from '../intercept'
import userServices from '../services/userServices'
import Notification from '../components/Notification'

export default function Root() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pendingAction = useSelector(state => state.pendingAction)
  const user = useSelector(state => state.user)
  let userLoggedIn = Object.keys(user).length !== 0
  const rememberMe =
    localStorage.getItem('rememberMe') === 'true' ? true : false

  const notification = useSelector(state => state.notification)

  async function rememberUser() {
    if (rememberMe) {
      try {
        const UserData = await userServices.rememberUser()

        if (UserData && UserData.success) {
          dispatch(setUser({ ...UserData }))
          userLoggedIn = true
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (userLoggedIn) {
      dispatch(initializeWishlist())
      dispatch(initializeCart())
      if (pendingAction !== null && pendingAction.name === 'redirectToPage') {
        navigate(pendingAction.page)
      }
    }
  }
  async function deleteTokens() {
    await userServices.deleteTokens()
  }

  useEffect(() => {
    if (!rememberMe && !userLoggedIn) {
      deleteTokens()
    }
    addInterceptor()
    dispatch(initializeProducts())
    rememberUser()
  }, [])

  if (
    pendingAction !== null &&
    userLoggedIn &&
    pendingAction.name !== 'redirectToPage'
  ) {
    dispatch(performPendingAction(pendingAction))
    dispatch(setPendingAction(null))
  }

  return (
    <>
      <Navbar />
      {notification && (
        <Notification
          type={notification.type}
          content={notification.content}
        />
      )}
      <div id='detail'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
