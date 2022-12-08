import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from '../slices/ClientSlice';
import AccountReducer from '../slices/AccountSlice';
import ImagesReducer from '../slices/ImagesSlice';
import MovementsReducer from '../slices/MovementsSlice';

export const ConfigStorage = configureStore({
  reducer: {
    client: ClientReducer,
    account: AccountReducer,
    movements: MovementsReducer,
    images: ImagesReducer,
  },
});

export type AppDispatch = typeof ConfigStorage.dispatch;
