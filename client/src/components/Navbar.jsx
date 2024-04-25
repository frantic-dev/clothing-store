import '../styles/components/navbar.scss'
import HeartIcon from '../assets/heart-icon.svg?react'
import CartIcon from '../assets/cart-icon.svg?react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
  const username = useSelector(state => state.user.username)

  // function displayUsername() {
  //   if (username){

  //   }
  // }
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

        {username ? (
          <span id='username'>{username}</span>
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
