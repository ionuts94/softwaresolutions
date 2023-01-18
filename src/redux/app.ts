import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface InitialState {
  counter: number;
}



const initialState: InitialState = {
  counter: 0
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    increaseCounter: (state, action: PayloadAction<number>) => {
      state.counter = state.counter + action.payload;
    },
    decreaseCounter: (state, action: PayloadAction<number>) => {
      state.counter = state.counter - action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { increaseCounter, decreaseCounter } = appSlice.actions

export default appSlice.reducer