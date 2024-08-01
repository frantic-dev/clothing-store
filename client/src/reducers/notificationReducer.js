import { createSlice } from '@reduxjs/toolkit'

const initialState = null

export const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload
    },
  },
})

export const { showNotification } = notificationSlice.actions

export const displayNotification = notificationData => {
  return async dispatch => {
    const notify = JSON.parse(localStorage.getItem('showNotification'))
    if (notify) {
      dispatch(showNotification({ ...notificationData }))
      await new Promise(resolve => setTimeout(resolve, 4000))
      dispatch(showNotification(false))
    }
  }
}

export default notificationSlice.reducer
