
import { createSlice } from '@reduxjs/toolkit'
import colors from '../../constants/colors'

export const colorsSlice = createSlice({
  name: 'colors', 
  initialState: {
    currentAccent: colors.ACCENTS.PINK
  },
  reducers: {
    changeCurrentAccent: (state, action) => {
      state.currentAccent = action.payload
    }
  } 
})

export const { changeCurrentAccent } = colorsSlice.actions

export const getRoot = state => state.colors
export const selectCurrentAccent = state => getRoot(state).currentAccent

export default colorsSlice.reducer