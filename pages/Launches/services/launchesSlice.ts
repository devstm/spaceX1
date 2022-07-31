import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store';
import { getLaunches, initialState } from './launchesServices';


const LaunchPageSlice = createSlice({
  name: 'launchPage',
  initialState,
  reducers: {
    reset(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getLaunches.pending, (state) => {
        
        state.pending = true;
      })
      .addCase(getLaunches.fulfilled, (state, { payload }) => {
        console.log(payload);
        state.pending = false;
        state.data = payload;
      })
      .addCase(getLaunches.rejected, (state, s) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectUser = (state: RootState) => state.launches;
export const { reset } = LaunchPageSlice.actions;
export default LaunchPageSlice.reducer;
