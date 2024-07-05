import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

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
    const wishlist = await axios.get('/api/wishlist')
    dispatch(setWishlist(wishlist.data))
  }
}

export default wishlistSlice.reducer
