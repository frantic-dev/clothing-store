import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import productsReducer from './reducers/productsReducer'

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    products: productsReducer,
  },
})
