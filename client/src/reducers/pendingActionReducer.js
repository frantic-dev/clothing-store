/* eslint-disable no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'
import { setWishlist } from './wishlistReducer'
import { setCart } from './cartReducer'
import cartServices from '../services/cartServices'
import wishlistServices from '../services/wishlistServices'

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
      let wishlist = (await wishlistServices.getWishlist()).toString()

      // convert string to array for proper checking if product_id is already included in wishlist
      if (wishlist.length >= 1) {
        wishlist = wishlist.split(',')
      }

      // add to wishlist if product is not already included
      if (!wishlist.includes(action.product_id.toString())) {
        const newWishlist = await wishlistServices.addToWishlist({
          product_id: action.product_id,
        })
        dispatch(setWishlist(newWishlist))
      }
    }
  }

  if (action.name === 'removeFromWishlist') {
    return async dispatch => {
      let wishlist = (await wishlistServices.getWishlist()).toString()

      if (wishlist.length === 1) {
        const newWishlist = await wishlistServices.removeFromWishlist({
          updatedWishlist: '',
        })
        dispatch(setWishlist(newWishlist))
      } else {
        const wishlistArray = wishlist.split(',')
        const product_index = wishlistArray.indexOf(
          action.product_id.toString()
        )

        wishlistArray.splice(product_index, 1)

        const newWishlist = wishlistArray.join(',')
        const updatedWishlist = await wishlistServices.removeFromWishlist({
          updatedWishlist: newWishlist,
        })

        dispatch(setWishlist(updatedWishlist))
      }
    }
  }

  if (action.name === 'addToCart') {
    return async dispatch => {
      let cart = (await cartServices.getCart()).toString()

      // convert string to array for proper checking if product_id is already included in cart
      if (cart.length >= 1) {
        cart = cart.split(',')
      }

      // add to cart if product is not already included
      if (!cart.includes(action.product_id.toString())) {
        const newCart = await cartServices.addToCart({
          product_id: action.product_id,
        })
        dispatch(setCart(newCart))
      }
    }
  }
  if (action.name === 'removeFromCart') {
    return async dispatch => {
      let cart = (await cartServices.getCart()).toString()
      if (cart.length === 1) {
        const newCart = await cartServices.removeFromCart({
          updatedCart: '',
        })
        dispatch(setCart(newCart))
      } else {
        const cartArray = cart.split(',')
        const product_index = cartArray.indexOf(
          action.product_id.toString()
        )
        cartArray.splice(product_index, 1)
        const newCart = cartArray.join(',')
        const updatedCart = await cartServices.removeFromCart({
          updatedCart: newCart,
        })
        dispatch(setCart(updatedCart))
      }
    }
  }
}

export default pendingActionSlice.reducer
