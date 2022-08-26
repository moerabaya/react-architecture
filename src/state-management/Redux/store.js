import { configureStore } from '@reduxjs/toolkit'
import { numberOfClicksReducer } from './slices'

export const store = configureStore({
  reducer: {
    numberOfClicks: numberOfClicksReducer
  }
})