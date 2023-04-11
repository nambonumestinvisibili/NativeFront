import { configureStore } from "@reduxjs/toolkit";
import {  } from "react-redux";
import colorsReducer from './reducers/colorsSlice'
import spinnerReducer from './reducers/spinnerSlice'

const store = configureStore({
  reducer: {
    colors: colorsReducer,
    spinner: spinnerReducer
  }
})

export default store