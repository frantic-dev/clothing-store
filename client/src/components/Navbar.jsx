import '../styles/components/navbar.scss'
import HeartIcon from '../assets/transparent-heart-icon.png'
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
        <Link to={'/shop'}>Shop</Link>
        <Link to={'/'}>Our Story</Link>
        <Link to={'/'}>Blog</Link>
        <Link to={'/'}>Contact Us</Link>
      </div>
      <div>
        <Link to={'/profile/wishlist'}>
          <img
            src={HeartIcon}
            className='icon'
            id='wishlist-icon'
          />
        </Link>
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
