import { configureStore, combineReducers } from "@reduxjs/toolkit"
import favoritesReducer from "../reducers"
import jobsTrayReducer from "../reducers/jobs"
import localStorage from "redux-persist/lib/storage"
import { persistReducer, persistStore } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY
    })
  ]
}

const bigReducer = combineReducers({
  favourite: favoritesReducer,
  jobs: jobsTrayReducer
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)
