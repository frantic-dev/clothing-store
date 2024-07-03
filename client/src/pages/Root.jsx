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
import axios from 'axios'
import { setUser } from '../reducers/userReducer'

export default function Root() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pendingAction = useSelector(state => state.pendingAction)
  const user = useSelector(state => state.user)
  let userLoggedIn = Object.keys(user).length !== 0

  async function rememberUser() {
    const rememberMe = localStorage.getItem('rememberMe') || false

    if (rememberMe === 'true') {
      const response = await axios.get('/api/rememberUser')
      const UserData = response.data

      if (UserData && UserData.success) {
        console.log('it worked')
        dispatch(setUser({ ...UserData }))
        userLoggedIn = true
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

  useEffect(() => {
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
      <div id='detail'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
