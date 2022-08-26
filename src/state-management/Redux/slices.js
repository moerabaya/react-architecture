import { createSlice } from '@reduxjs/toolkit'

const numberOfClicks = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    setNumberOfClicks(state, action) {
      state.push({
        amount: action.payload.amount,
				timestamp: Date.now()
      })
    }
  }
})

export const { setNumberOfClicks } = numberOfClicks.actions;
export const numberOfClicksReducer = numberOfClicks.reducer;