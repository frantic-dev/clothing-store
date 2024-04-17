import LoginImg from '../assets/login-img.jpg'
import LoginForm from '../components/LoginForm'
import '../styles/login-page.scss'

function LoginPage() {
  return (
    <div id='login-page'>
      <img
        src={LoginImg}
        alt='a fashion model'
      />
      <LoginForm />
    </div>
  )
}
export default LoginPage
