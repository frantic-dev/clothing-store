import { createSlice } from '@reduxjs/toolkit'
import productServices from '../services/productServices'

const initialState = []

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action) {
      return action.payload
    },
  },
})

export const { setProducts } = productSlice.actions


export const initializeProducts = () => {
  return async dispatch => {
    const products = await productServices.getAll()
    dispatch(setProducts(products))
  }
}

export default productSlice.reducer