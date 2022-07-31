import { createAsyncThunk } from '@reduxjs/toolkit';
import { apolloClient } from '../../../graphql';
import { MISSIONS_QUERY } from './queries';

export const getMissions = createAsyncThunk('graphql/missions', async () => {
  const resp = await apolloClient.query({
    query: MISSIONS_QUERY,
  });
  console.log(resp.data.missionsResult.data);
  return resp.data.missionsResult.data;
});

export const initialState: any = {
  data: [],
  pending: false,
  error: false,
};

export const getNeededDataFromObject = (el: any, index: number) => {
  return {
    key: index,
    launch_year: el.launch_year,
  };
};
