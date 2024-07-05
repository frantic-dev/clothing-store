import { createSlice } from '@reduxjs/toolkit'
import wishlistServices from '../services/wishlistServices'

const initialState = []

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    setWishlist(state, action) {
      const wishlistString = action.payload.toString()
      if (!wishlistString.includes(',')) {
        return [wishlistString]
      } else if (wishlistString.includes(',')) {
        return action.payload.split(',')
      } else return []
    },
  },
})

export const { setWishlist } = wishlistSlice.actions

export const initializeWishlist = () => {
  return async dispatch => {
    const wishlist = await wishlistServices.getWishlist()
    dispatch(setWishlist(wishlist))
  }
}

export default wishlistSlice.reducer
