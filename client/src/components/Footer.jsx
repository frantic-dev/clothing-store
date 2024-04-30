import PackageIcon from '../assets/package-icon.png'
import MoneyIcon from '../assets/dollar-icon.png'
import HeadphoneIcon from '../assets/headphone-icon.png'
import CreditCardIcon from '../assets/credit-card-icon.png'
import CallIcon from '../assets/call-icon.svg?react'
import EmailIcon from '../assets/email-icon.svg?react'
import LocationIcon from '../assets/location-icon.svg?react'
import '../styles/components/footer.scss'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div id='footer'>
      <div>
        <div>
          <img src={PackageIcon} />
          <h4>free shipping</h4>
          <p>Free shipping for order above 150$</p>
        </div>
        <div>
          <img src={MoneyIcon} />
          <h4>money guarantee</h4>
          <p>Within 30 days for an exchange</p>
        </div>
        <div>
          <img src={HeadphoneIcon} />
          <h4>online support</h4>
          <p>24 hours a day, 7 days a week</p>
        </div>
        <div>
          <img src={CreditCardIcon} />
          <h4>flexible payment</h4>
          <p>Pay with multiple credit cards</p>
        </div>
      </div>

      <div id='dark-bg'>
        <div id='dark-footer'>
          <div>
            <h2>Logo</h2>
            <div>
              <CallIcon className='icon' />
              (704) 555-0127
            </div>
            <div>
              <EmailIcon className='icon' />
              Brand@example.com
            </div>
            <div>
              <LocationIcon className='icon' />
              1234 Street City
            </div>
          </div>
          <div>
            <h4>information</h4>
            <Link to='/'>my account</Link>
            <Link to='/'>login</Link>
            <Link to='/'>my cart</Link>
            <Link to='/'>my wishlist</Link>
            <Link to='/'>checkout</Link>
          </div>
          <div>
            <h4>service</h4>
            <Link to='/'>about us</Link>
            <Link to='/'>careers</Link>
            <Link to='/'>delivery information</Link>
            <Link to='/'>privacy policy</Link>
            <Link to='/'>terms & conditions</Link>
          </div>
          <div>
            <h4>subscribe</h4>
            <p>
              Enter your email below to be the first to know about new collections and product launches.
            </p>
            <input type='text' placeholder='Your Email' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
