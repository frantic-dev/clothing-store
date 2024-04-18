import FormPage from './pages/FormPage'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import SignupImg from './assets/signup-img.jpg'
import SignupForm from './components/SignupForm'
import ForgotPasswordImg from './assets/forgot-password-img.jpg'
import ForgotPasswordForm from './components/ForgotPasswordForm'

function App() {
  return (
    <div>
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
