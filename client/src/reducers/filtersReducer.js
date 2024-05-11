import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter(state, action) {
      return state.concat(action.payload)
    },
    removeFilter(state, action) {
      return state.filter(e => e !== action.payload)
    },
  },
})

export const { addFilter, removeFilter } = filterSlice.actions

export default filterSlice.reducer
