import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCart(state, action) {
      const cartString = action.payload.toString()
      if (!cartString.includes(',')) {
        return [cartString]
      } else if (cartString.includes(',')) {
        return action.payload.split(',')
      } else return []
    },
  },
})

export const { setCart } = cartSlice.actions

export const initializeCart = () => {
  return async dispatch => {
    const cart = await axios.get('/api/cart')
    dispatch(setCart(cart.data))
  }
}

export default cartSlice.reducer
