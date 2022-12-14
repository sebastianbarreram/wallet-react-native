import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ClientInterface } from '../interfaces/ClientInterface';
import { ClientNotFoundInterface } from '../interfaces/ClientNotFoundInterface';

const initialState: ClientInterface | ClientNotFoundInterface = {
  id: '',
  fullName: '',
  email: '',
  phone: '',
  photo: 'https://reactjs.org/logo-og.png',
  state: 1,
  createdAt: null,
  updatedAt: null,
  account: {
    id: '',
    idClient: '',
    balance: '',
    credit: '',
    state: 0,
    createdAt: null,
    updatedAt: null,
    deletedAt: null,
    movementsIncome: [],
    movementsOutcome: [],
  },
  app: {
    id: '',
    idClient: '',
    color: '',
    createdAt: null,
    updatedAt: null,
  },
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
