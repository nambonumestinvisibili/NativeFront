
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth', 
  initialState: {
    jwt: null
  },
  reducers: {
    updateJWT: (state, action) => {
      state.jwt = action.payload
    },
    removeJWT: (state) => {
      state.jwt = null
    }
  } 
})

export const { updateJWT, removeJWT } = authSlice.actions

const getRoot = state => state.auth
export const selectJWT = state => getRoot(state).jwt

export default authSlice.reducer