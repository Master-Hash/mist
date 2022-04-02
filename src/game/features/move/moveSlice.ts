import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store.js';

export interface MoveState {
  value: number;
}

const initialState: MoveState = {
  value: 45,
};

export const moveSlice = createSlice({
  name: 'move',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    setAngle: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { increment, decrement, setAngle } = moveSlice.actions;
export const selectAngle = (state: RootState) => state.angle.value;
export default moveSlice.reducer;
