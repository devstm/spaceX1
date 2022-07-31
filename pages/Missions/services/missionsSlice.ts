import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../redux/store';
import { getMissions, initialState } from './missionsServices';

const MissionSlice = createSlice({
  name: 'missionPage',
  initialState,
  reducers: {
    reset(state) {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMissions.pending, (state) => {
        state.pending = true;
      })
      .addCase(getMissions.fulfilled, (state,  {payload} ) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(getMissions.rejected, (state, s) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectUser = (state: RootState) => state.launches;
export const { reset } = MissionSlice.actions;
export default MissionSlice.reducer;
