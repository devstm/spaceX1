import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';

import thunkMiddleware from 'redux-thunk';
import launchesSlice from '../pages/Launches/services/launchesSlice';
import missionsSlice from '../pages/Missions/services/missionsSlice';

export const store = configureStore({
  reducer: {
    launches : launchesSlice,
    missions : missionsSlice,
  },
  middleware: [thunkMiddleware],

});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
