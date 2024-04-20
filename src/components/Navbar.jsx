import '../styles/components/navbar.scss'
import HeartIcon from '../assets/heart-icon.svg?react'
import CartIcon from '../assets/cart-icon.svg?react'

function Navbar() {
  return (
    <nav>
      <div>Logo</div>
      <div id='nav-links'>
        <a href=''>Home</a>
        <a href=''>Shop</a>
        <a href=''>Our Story</a>
        <a href=''>Blog</a>
        <a href=''>Contact Us</a>
      </div>
      <div>
        <a href=''>
          <HeartIcon className='icon' />
        </a>
        <a href=''>
          <CartIcon className='icon' />
        </a>
        <button>Login</button>
      </div>
    </nav>
  )
}
export default Navbar
