import ReactDOM from 'react-dom/client'
import './styles/app.scss'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import store from './store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
