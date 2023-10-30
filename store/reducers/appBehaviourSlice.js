import { createSlice } from "@reduxjs/toolkit";

export const appBehaviourSlice = createSlice({
  name: 'appBehaviour',
  initialState: {
    isLoading: false,
    error: false
  },
  reducers: {
    startLoading: (state) => {
      state.isLoading = true
    },
    stopLoading: state => {
      state.isLoading = false
    },
    showError: state => {
      state.error = true
    },
    hideError: state => {
      state.error = false
    }
  }
})

export const { startLoading, stopLoading, showError, hideError } = appBehaviourSlice.actions

const getRoot = state => state.appBehaviour
export const selectIsLoading = state => getRoot(state).isLoading
export const selectIsError = state => getRoot(state).error

export default appBehaviourSlice.reducer