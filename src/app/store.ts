import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import moveReducer from '../features/move/moveSlice.js';

export const store = configureStore({
  reducer: {
    angle: moveReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
