import { configureStore } from "@reduxjs/toolkit";
import { } from "react-redux";
import colorsReducer from './reducers/colorsSlice';
import spinnerReducer from './reducers/spinnerSlice';
import authReducer from './reducers/authSlice';

const store = configureStore({
  reducer: {
    colors: colorsReducer,
    spinner: spinnerReducer,
    auth: authReducer
  }
})

export default store