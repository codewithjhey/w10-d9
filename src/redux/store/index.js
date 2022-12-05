import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoritesReducer from "../reducers"
import jobsTrayReducer from "../reducers/jobs"

const bigReducer = combineReducers({
  favourite: favoritesReducer,
  jobs: jobsTrayReducer
})

const store = configureStore({
  reducer: bigReducer
})

export default store
