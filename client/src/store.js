import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import notificationReducer from './reducers/notificationReducer'
import productsReducer from './reducers/productsReducer'
import filtersReducer from './reducers/filtersReducer'
import pendingActionReducer from './reducers/pendingActionReducer'
import wishlistReducer from './reducers/wishlistReducer'
import logger from 'redux-logger'

export default configureStore({
  reducer: {
    user: userReducer,
    notification: notificationReducer,
    products: productsReducer,
    filter: filtersReducer,
    pendingAction: pendingActionReducer,
    wishlist: wishlistReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
})
