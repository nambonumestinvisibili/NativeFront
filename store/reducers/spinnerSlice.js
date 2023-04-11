import { createSlice } from "@reduxjs/toolkit";

export const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: {
    spinnerIsVisible: false
  },
  reducers: {
    showSpinner: (state, _) => {
      state.spinnerIsVisible = true
    },
    hideSpinner: (state, _) => {
      state.spinnerIsVisible = false
    }
  }
})

export const {
  showSpinner,
  hideSpinner
} = spinnerSlice.actions

const getRoot = state => state.spinner
export const selectSpinner = state => getRoot(state).spinnerIsVisible

export default spinnerSlice.reducer