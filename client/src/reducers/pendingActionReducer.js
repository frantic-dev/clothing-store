/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = null

async function addToWishlist(product_id) {
  console.log('its working')
  console.log(product_id)
  const response = await axios.post('api/wishlist', { product_id: product_id })
}

export const pendingActionSlice = createSlice({
  name: 'pendingAction',
  initialState,
  reducers: {
    setPendingAction(state, action) {
      return action.payload
    },
    performPendingAction(state, action) {
      if (action.payload.action === 'addToWishlist') {
        addToWishlist(action.payload.product_id)
      }
    },
  },
})

export const { setPendingAction, performPendingAction } =
  pendingActionSlice.actions

export default pendingActionSlice.reducer
