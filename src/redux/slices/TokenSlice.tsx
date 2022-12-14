import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const TokenSlice = createSlice({
  name: 'app',
  initialState: {
    token: '',
  },
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
  },
});

export default TokenSlice.reducer;
export const { setToken } = TokenSlice.actions;
