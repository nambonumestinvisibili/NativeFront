import { configureStore } from "@reduxjs/toolkit";
import { } from "react-redux";
import colorsReducer from './reducers/colorsSlice';
import spinnerReducer from './reducers/spinnerSlice';
import authReducer from './reducers/authSlice';
import profileReducer from "./reducers/profileSlice";
import appBehaviourReducer from "./reducers/appBehaviourSlice";

const store = configureStore({
  reducer: {
    colors: colorsReducer,
    spinner: spinnerReducer,
    auth: authReducer,
    profile: profileReducer,
    appBehaviour: appBehaviourReducer
  }
})

export default store