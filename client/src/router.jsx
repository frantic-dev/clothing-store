import FormPage from './pages/FormPage.jsx'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import ForgotPasswordImg from './assets/forgot-password-img.jpg'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import Root from './pages/Root.jsx'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
  {
    path: 'login',
    element: (
      <FormPage
        bg={LoginImg}
        form={<LoginForm />}
      />
    ),
  },
  {
    path: 'forgot-password',
    element: (
      <FormPage
        bg={ForgotPasswordImg}
        form={<ForgotPasswordForm />}
      />
    ),
  },
])

export default router
