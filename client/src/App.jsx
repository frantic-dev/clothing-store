import FormPage from './pages/FormPage'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import SignupImg from './assets/signup-img.jpg'
import SignupForm from './components/SignupForm'
import ForgotPasswordImg from './assets/forgot-password-img.jpg'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import DressImg from './assets/dress-img.jpg'
import CategoryCard from './components/CategoryCard'
import ProductCard from './components/ProductCard'
import TshirtImg from './assets/tshirt-img.jpg'
import Hero from './components/Hero'
import WomanImg from './assets/woman-img.jpg'
import ManImg from './assets/man-img.jpg'
import HeadphonesImg from './assets/headphones-img.jpg'
import JewelryImg from './assets/jewelry-img.jpg'

function App() {
  return (
    <div id='home-page'>
      <Hero />
      <div className='inner-container'>
        <h2>Shop by Categories</h2>
        <div id='category-cards'>
          <CategoryCard
            img={WomanImg}
            text='Women&apos;s clothing'
          />
          <CategoryCard
            img={ManImg}
            text='Men&apos;s clothing'
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
        <ProductCard
          img={TshirtImg}
          title='Yahwen'
          description='korean t-shirt'
          price='38$'
          previousPrice='43$'
        />
      </div>
    </div>
  )
}

export default App
