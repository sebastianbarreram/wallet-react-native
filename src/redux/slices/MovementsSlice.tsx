import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MovementInterface } from '../interfaces/MovementInterface';

const initialState: MovementInterface[] = [];

const MovementsSlice = createSlice({
  name: 'movements',
  initialState: {
    movements: initialState,
    loading: false,
  },
  reducers: {
    resetMovements(state, action: PayloadAction<MovementInterface[]>) {
      state.movements = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchMovements.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchMovements.fulfilled, (state, action) => {
      state.movements = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchMovements.rejected, state => {
      state.loading = false;
    });
  },
});

export default MovementsSlice.reducer;
export const { resetMovements } = MovementsSlice.actions;

export const fetchMovements = createAsyncThunk(
  'users/fetchMovements',
  async (id: string) => {
    const response = await fetch(
      `http://192.168.1.13:3000/api/account/movements/${id}`,
    );
    return (await response.json()) as MovementInterface[];
  },
);
