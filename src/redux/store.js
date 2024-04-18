import {configureStore} from '@reduxjs/toolkit';
import userSlice from './user';
import weatherSlice from './weather';

export const store = configureStore({
  reducer: {
    user: userSlice,
    weather: weatherSlice,
  },
});
