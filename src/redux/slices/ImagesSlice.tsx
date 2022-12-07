import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AccountGetByIdInterface } from '../../hooks/interfaces/accountGetByIdInterface';

const initialState: AccountGetByIdInterface[] = [];

const ImagesSlice = createSlice({
  name: 'images',
  initialState: {
    images: initialState,
  },
  reducers: {
    setImage(state, action: PayloadAction<AccountGetByIdInterface[]>) {
      state.images = action.payload;
    },
  },
});

export default ImagesSlice.reducer;
export const { setImage } = ImagesSlice.actions;
