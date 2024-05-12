import { createSlice } from '@reduxjs/toolkit'

const initialState = { categories: [], maxPrice: 1000 }

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    addFilter(state, action) {
      return { ...state, categories: state.categories.concat(action.payload) }
    },
    removeFilter(state, action) {
      return {
        ...state,
        categories: state.categories.filter(e => e !== action.payload),
      }
    },
    resetFilters() {
      return initialState
    },
    setMaxPrice(state, action) {
      return { ...state, maxPrice: action.payload }
    },
  },
})

export const { addFilter, removeFilter, resetFilters, setMaxPrice } = filterSlice.actions

export default filterSlice.reducer
