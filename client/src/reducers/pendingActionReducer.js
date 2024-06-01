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
      const request = await axios.get('/api/wishlist')
      let currentWishlist = request.data.toString()
      
      // convert string to array for proper checking if product_id is already included in wishlist
      if (currentWishlist.length >= 1) {
        currentWishlist = currentWishlist.split(',')
      }

      // add to wishlist if product is not already included
      if (!currentWishlist.includes(action.product_id.toString())) {
        const postedWishlist = await axios.post('api/wishlist', {
          product_id: action.product_id,
        })
        dispatch(setWishlist(postedWishlist.data))
      }
    }
  }

  if (action.name === 'removeFromWishlist') {
    return async dispatch => {
      const request = await axios.get('/api/wishlist')
      const currentWishlist = request.data.toString()

      if (currentWishlist.length === 1) {
        const request = await axios.put('/api/wishlist', {
          updatedWishlist: '',
        })
        dispatch(setWishlist(request.data))
      } else {
        const wishlistArray = currentWishlist.split(',')
        const product_index = wishlistArray.indexOf(
          action.product_id.toString()
        )

        wishlistArray.splice(product_index, 1)

        const newWishlist = wishlistArray.join(',')
        const response = await axios.put('/api/wishlist', {
          updatedWishlist: newWishlist,
        })

        dispatch(setWishlist(response.data))
      }
    }
  }
}

export default pendingActionSlice.reducer
