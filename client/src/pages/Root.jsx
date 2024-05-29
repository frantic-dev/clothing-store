import { Outlet } from 'react-router-dom'
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
  const pendingAction = useSelector(state => state.pendingAction)
  const user = useSelector(state => state.user)
  const userLoggedIn = Object.keys(user).length !== 0

  async function clearSession() {
    const response = await axios.get('/api/clear-session')
    console.log(response)
  }
  useEffect(() => {
    dispatch(initializeProducts())

    if (userLoggedIn) dispatch(initializeWishlist())
    else clearSession()
  }, [])

  if (pendingAction !== null && userLoggedIn) {
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
