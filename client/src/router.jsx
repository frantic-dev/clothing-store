import FormPage from './pages/FormPage.jsx'
import LoginImg from './assets/login-img.jpg'
import LoginForm from './components/LoginForm'
import ForgotPasswordImg from './assets/forgot-password-img.jpg'
import ForgotPasswordForm from './components/ForgotPasswordForm'
import SignupImg from './assets/signup-img.jpg'
import SignupForm from './components/SignupForm'
import Root from './pages/Root.jsx'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import ShopPage from './pages/ShopPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import ProfileRoot from './pages/ProfileRoot.jsx'
import WishlistPage from './pages/WishlistPage.jsx'
import PersonalInfoPage from './pages/PersonalInfoPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: 'shop',
        element: <ShopPage />,
      },
      {
        element: <ProductPage />,
        path: '/shop/:productId',
      },
      {
        element: <ProfileRoot />,
        path: 'profile',
        children: [
          {
            path: 'wishlist',
            element: <WishlistPage />,
          },
          {
            path: 'personal-info',
            element: <PersonalInfoPage />,
          },
        ],
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
  {
    path: 'signup',
    element: (
      <FormPage
        bg={SignupImg}
        form={<SignupForm />}
      />
    ),
  },
])

export default router
