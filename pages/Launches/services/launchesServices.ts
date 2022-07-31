import { createAsyncThunk } from '@reduxjs/toolkit';
import { apolloClient } from '../../../graphql';
import { ILaunch } from '../types';
import { LAUNCHES_QUERY } from './queries';

export const getLaunches = createAsyncThunk('graphql/launches', async () => {
  const resp = await apolloClient.query({
    query: LAUNCHES_QUERY,
  });
  return resp.data.launchesPast;
});

export const initialState: ILaunch = {
  data: [],
  pending: false,
  error: false,
};

export const getNeededDataFromObject = (el: any, index: number) => {
  return {
    key: index,
    launch_year: el.launch_year,
    mission_name: el.mission_name,
    launch_success: el.launch_success,
    launch_date_utc: el.launch_date_utc,
    launch_site: el.launch_site.site_name,
    rocket_country: el.rocket.rocket.country,
    cost_per_launch: el.rocket.rocket.cost_per_launch,
    success_rate: el.rocket.rocket.success_rate_pct,
    description: el.rocket.rocket.description,
    mass: el.rocket.rocket.mass,
    diameter: el.rocket.rocket.diameter,
    mission_id: el.mission_id,
    rocket_name: el.rocket.rocket_name,
    upComing: el.upcoming,
    reuseable: el.rocket.first_stage.cores[0].reused,
    fairings: el.rocket?.fairings?.reused || false,
  };
};

export const filterLaunches = (el: any, filter: any) => {
  return (
    (el.launch_year === filter.launch_year || filter.launch_year === 'all') &&
    (el.reuseable === (filter.reuseable === 'true') ||
      filter.reuseable === 'all') &&
    (el.fairings === (filter.fairings === 'true') ||
      filter.fairings === 'all') &&
    (el.rocket_name.trim().toLowerCase().includes(filter.rocket_name.trim().toLowerCase()) || filter.rocket_name === 'all') &&
    (el.launch_success === (filter.launch_success === 'true') ||
      filter.launch_success === 'all')
  );
};
export const generateArrayOfYears = () => {
  const years = [...Array(70)].map(
    (el, index) => (el = (2022 - index).toString())
  );
  years.unshift('all');
  return years;
};
export const filterState = {
  launch_year: 'all',
  reuseable: 'all',
  fairings: 'all',
  rocket_name: 'all',
  launch_success: 'all',
};