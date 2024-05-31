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
import axios from 'axios'

export default function Root() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const pendingAction = useSelector(state => state.pendingAction)
  const user = useSelector(state => state.user)
  const userLoggedIn = Object.keys(user).length !== 0

  async function clearSession() {
    await axios.get('/api/clear-session')
  }
  useEffect(() => {
    dispatch(initializeProducts())

    if (userLoggedIn) {
      dispatch(initializeWishlist())
      if (pendingAction !== null && pendingAction.name === 'redirectToPage') {
        navigate(pendingAction.page)
      }
    } else clearSession()
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
