
import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth', 
  initialState: {
    jwt: null
  },
  reducers: {
    updateJWT: (state, action) => {
      state.jwt = action.payload
    }
  } 
})

export const { updateJWT } = authSlice.actions

const getRoot = state => state.auth
export const selectJWT = state => getRoot(state).jwt

export default colorsSlice.reducer