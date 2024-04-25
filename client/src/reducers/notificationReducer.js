import { createSlice } from "@reduxjs/toolkit"

const initialState = false

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
  }
})

export const {showNotification} = notificationSlice.actions

export const displayNotification = () => {
  return async dispatch => {
    dispatch(showNotification(true))
    await new Promise(resolve => setTimeout(resolve, 4000))
    dispatch(showNotification(false))
  }
}


export default notificationSlice.reducer