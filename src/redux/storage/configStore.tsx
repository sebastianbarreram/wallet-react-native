import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';
import AccountReducer from '../slices/AccountSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
    account: AccountReducer,
  },
});

export type AppDispatch = typeof ConfigStorage.dispatch;
