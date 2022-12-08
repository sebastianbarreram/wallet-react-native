import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountInterface } from '../interfaces/AccountInterface';

const initialState: AccountInterface = {
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
  name: 'account',
  initialState: {
    account: initialState,
  },
  reducers: {
    setAccount(state, action: PayloadAction<AccountInterface>) {
      state.account = action.payload;
    },
  },
});

export default AccountSlice.reducer;
export const { setAccount } = AccountSlice.actions;
