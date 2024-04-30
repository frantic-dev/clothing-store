import FormPage from './pages/FormPage'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import SignupImg from './assets/signup-img.jpg'
import SignupForm from './components/SignupForm'
import ForgotPasswordImg from './assets/forgot-password-img.jpg'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import CategoryCard from './components/CategoryCard'
import ProductCard from './components/ProductCard'
import TshirtImg from './assets/tshirt-img.jpg'
import Hero from './components/Hero'
import WomanImg from './assets/woman-img.jpg'
import ManImg from './assets/man-img.jpg'
import HeadphonesImg from './assets/headphones-img.jpg'
import JewelryImg from './assets/jewelry-img.jpg'
import BestSeller from './modules/BestSeller'
import Reviews from './modules/Reviews'

function App() {
  return (
    <div id='home-page'>
      <Hero />
      <div className='inner-container'>
        <h2>Shop by Categories</h2>
        <div id='category-cards'>
          <CategoryCard
            img={WomanImg}
            text="Women's clothing"
          />
          <CategoryCard
            img={ManImg}
            text="Men's clothing"
          />
          <CategoryCard
            img={JewelryImg}
            text='Jewelry'
          />
          <CategoryCard
            img={HeadphonesImg}
            text='Electronics'
          />
        </div>
        <BestSeller />
        <Reviews />
      </div>
    </div>
  )
}

export default App
