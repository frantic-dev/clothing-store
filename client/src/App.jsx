import FormPage from './pages/FormPage'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import SignupImg from './assets/signup-img.jpg'
import SignupForm from './components/SignupForm'
import ForgotPasswordImg from './assets/forgot-password-img.jpg'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import CategoryCard from './components/CategoryCard'
import DressImg from './assets/dress-img.jpg'
import ProductCard from './components/ProductCard'
import TshirtImg from './assets/tshirt-img.jpg'
import Hero from './components/Hero'

function App() {
  return (
    <div>
      <Hero />
      <CategoryCard
        img={DressImg}
        text='Dresses'
      />
      <ProductCard
        img={TshirtImg}
        title='Yahwen'
        description='korean t-shirt'
        price='38$'
        previousPrice='43$'
      />
      <FormPage
        bg={LoginImg}
        form={<LoginForm />}
      />
      <FormPage
        bg={SignupImg}
        form={<SignupForm />}
      />
      <FormPage
        bg={ForgotPasswordImg}
        form={<ForgotPasswordForm />}
      />
    </div>
  )
}

export default App
