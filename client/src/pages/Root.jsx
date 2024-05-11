import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { initializeProducts } from '../reducers/productsReducer'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

export default function Root() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeProducts())
  }, [])
  
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
