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
      const currentWishlist = await (await axios.get('/api/wishlist')).data

      // add to wishlist if product is not already included
      if (!currentWishlist.includes(action.product_id)) {
        const postedWishlist = await axios.post('api/wishlist', {
          product_id: action.product_id,
        })
        dispatch(setWishlist(postedWishlist.data))
      }
    }
  }
}

export default pendingActionSlice.reducer
