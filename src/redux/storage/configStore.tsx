import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
  },
});

export type AppDispatch = typeof ConfigStorage.dispatch;
