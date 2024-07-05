import { createSlice } from '@reduxjs/toolkit'
import cartServices from '../services/cartServices'

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
    const cart = await cartServices.getCart()
    console.log(cart)
    dispatch(setCart(cart))
  }
}

export default cartSlice.reducer
