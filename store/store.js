import { configureStore } from "@reduxjs/toolkit";
import {  } from "react-redux";
import colorsReducer from './reducers/colorsSlice'

const store = configureStore({
  reducer: {
    colors: colorsReducer
  }
})

export default store