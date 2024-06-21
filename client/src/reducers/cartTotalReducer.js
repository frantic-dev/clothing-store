import { createSlice } from '@reduxjs/toolkit'

const initialState = 0

export const cartTotalSlice = createSlice({
  name: 'cartTotal',
  initialState,
  reducers: {
    initializeCartTotal() {
      return 0
    },
    addToCartTotal(state, action) {
      return state + action.payload
    },
  },
})

export const { initializeCartTotal, addToCartTotal } = cartTotalSlice.actions

export default cartTotalSlice.reducer
