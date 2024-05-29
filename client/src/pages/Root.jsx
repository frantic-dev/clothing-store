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

export default function Root() {
  const dispatch = useDispatch()
  const pendingAction = useSelector(state => state.pendingAction)
  const user = useSelector(state => state.user)

  useEffect(() => {
    dispatch(initializeProducts())
  }, [])

  if (pendingAction !== null && Object.keys(user).length !== 0) {
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
