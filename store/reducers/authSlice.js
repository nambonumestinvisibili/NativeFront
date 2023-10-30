
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth', 
  initialState: {
    jwt: null,
    signupTokenJwt: null
  },
  reducers: {
    updateJWT: (state, action) => {
      state.jwt = action.payload
      state.signupTokenJwt = null
    },
    updateSignupJWT: (state, action) => {
      state.signupTokenJwt = action.payload
      state.jwt = null
    },
    removeJWT: (state) => {
      state.jwt = null
    }
  } 
})

export const { updateJWT, removeJWT, updateSignupJWT } = authSlice.actions

const getRoot = state => state.auth
export const selectJWT = state => getRoot(state).jwt
export const selectSignupJWT = state => getRoot(state).signupTokenJwt

export default authSlice.reducer