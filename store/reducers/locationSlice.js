import { createSlice } from "@reduxjs/toolkit";

//currently not used. add to store if needed.

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    currentLocation: null
  },
  reducers: {
    changeLocation: (state, action) => {
      state.currentLocation = action.payload
    }
  }
})

export const { changeLocation } = locationSlice.actions

const getRoot = state => state.location
export const selectCurrentLocation = state => getRoot(state).currentLocation

export default locationSlice.reducer