import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import productsReducer from './reducers/productsReducer'
import filtersReducer from './reducers/filtersReducer'

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    products: productsReducer,
    filter: filtersReducer
  },
})
