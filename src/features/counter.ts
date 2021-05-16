import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';

export type CounterState = {
  count: number;
};
const initialState: CounterState = { count: 0 };

export const counterSlice = createSlice({
  name: 'cunter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
  }),
    decremented: (state) => ({ ...state, count: state.count - 1,}),
    incremented: (state) => ({ ...state, count: state.count + 1,}),
    doubleIncremented: (state) => ({ ...state, count: state.count + 2,}),
  },
});
