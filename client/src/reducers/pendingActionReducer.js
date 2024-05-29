/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { setWishlist } from './wishlistReducer'

const initialState = null

export const pendingActionSlice = createSlice({
  name: 'pendingAction',
  initialState,
  reducers: {
    setPendingAction(state, action) {
      return action.payload
    },
  },
})

export const { setPendingAction } = pendingActionSlice.actions

export const performPendingAction = action => {
  if (action.name === 'addToWishlist') {
    return async dispatch => {
      const wishlist = await axios.post('api/wishlist', {
        product_id: action.product_id,
      })
      dispatch(setWishlist(wishlist.data))
    }
  }
}

export default pendingActionSlice.reducer
