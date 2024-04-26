import '../styles/components/navbar.scss'
import HeartIcon from '../assets/heart-icon.svg?react'
import CartIcon from '../assets/cart-icon.svg?react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const userFirstName = useSelector(state => state.user.firstName)
  const userLastName = useSelector(state => state.user.lastName)

  return (
    <nav>
      <div>Logo</div>
      <div id='nav-links'>
        <Link to={'/'}>Home</Link>
        <Link to={'/'}>Shop</Link>
        <Link to={'/'}>Our Story</Link>
        <Link to={'/'}>Blog</Link>
        <Link to={'/'}>Contact Us</Link>
      </div>
      <div>
        <a href=''>
          <HeartIcon className='icon' />
        </a>
        <a href=''>
          <CartIcon className='icon' />
        </a>

        {userFirstName ? (
          <span id='username'>{`${userFirstName} ${userLastName}`}</span>
        ) : (
          <Link to={'login'}>
            <button>Login</button>
          </Link>
        )}
      </div>
    </nav>
  )
}
export default Navbar
