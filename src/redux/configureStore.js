import { configureStore } from '@reduxjs/toolkit'
import weatherReducer from './weather/getWeather'
export const store = configureStore({
  reducer: {
    data:weatherReducer,
  },
})