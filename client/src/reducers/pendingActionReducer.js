import { createSlice } from '@reduxjs/toolkit'

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

export default pendingActionSlice.reducer
