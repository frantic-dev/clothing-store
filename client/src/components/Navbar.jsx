import '../styles/components/navbar.scss'
import HeartIcon from '../assets/transparent-heart-icon.png'
import CartIcon from '../assets/cart-icon.svg?react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import CartPopUp from './CartPopUp'

function Navbar() {
  const userFirstName = useSelector(state => state.user.firstName)
  const userLastName = useSelector(state => state.user.lastName)
  const [display, setDisplay] = useState(false)

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
      <div id='nav-right'>
        <Link to={'/profile/wishlist'}>
          <img
            src={HeartIcon}
            className='icon'
            id='wishlist-icon'
          />
        </Link>

        <div id='cart'>
          <CartIcon
            className='icon'
            onClick={() => setDisplay(!display)}
          />
          {display && <CartPopUp display={display} />}
        </div>

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
