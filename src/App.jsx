import FormPage from './pages/FormPage'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import SignupImg from './assets/signup-img.jpg'
import SignupForm from './components/SignupForm'

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
    </div>
  )
}

export default App
