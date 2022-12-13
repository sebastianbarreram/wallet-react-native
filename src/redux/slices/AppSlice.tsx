import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInterface } from '../interfaces/AccountInterface';

const initialState: ApptInterface = {
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
};

const AccountSlice = createSlice({
  name: 'app',
  initialState: {
    app: initialState,
  },
  reducers: {
    setAccount(state, action: PayloadAction<AccountInterface>) {
      state.app = action.payload;
    },
  },
});

export default AccountSlice.reducer;
export const { setAccount } = AccountSlice.actions;