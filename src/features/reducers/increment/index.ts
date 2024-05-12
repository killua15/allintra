import {type PayloadAction, createSlice} from '@reduxjs/toolkit';
import {MapStateTypes} from './types';

const initialState: MapStateTypes = {
  increment: 0,
};

export const incrementSlice = createSlice({
  name: 'increment',
  initialState,
  reducers: {
    setIncrement: (state: MapStateTypes, action: PayloadAction<number>) => {
      state.increment = action.payload;
    },
  },
});

export const {setIncrement} = incrementSlice.actions;

export const incrementReducer = incrementSlice.reducer;
