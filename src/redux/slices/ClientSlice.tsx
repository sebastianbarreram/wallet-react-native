import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientInterface } from '../interfaces/ClientInterface';

const initialState: ClientInterface = {
  id: '',
  fullName: '',
  email: '',
  phone: '',
  photo: 'https://reactjs.org/logo-og.png',
  state: 1,
  createdAt: new Date(),
  updatedAt: null,
};

const ClientSlice = createSlice({
  name: 'client',
  initialState: {
    client: initialState,
  },
  reducers: {
    setClient(state, action: PayloadAction<ClientInterface>) {
      state.client = action.payload;
    },
  },
});

export default ClientSlice.reducer;
export const { setClient } = ClientSlice.actions;
