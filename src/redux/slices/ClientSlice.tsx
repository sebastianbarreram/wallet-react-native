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
  createdAt: new Date('December 2, 2022 03:24:00'),
  updatedAt: null,
  account: {
    id: '',
    idClient: '',
    balance: '',
    credit: '',
    state: 0,
    createdAt: new Date('December 7, 1995 03:24:00'),
    updatedAt: null,
    deletedAt: null,
    movementsIncome: [],
    movementsOutcome: [],
  },
  app: {
    id: '',
    idClient: '',
    color: '',
    createdAt: new Date('December 17, 1995 03:24:00'),
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
