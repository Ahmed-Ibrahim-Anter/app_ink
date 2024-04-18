import {createSlice, createEntityAdapter} from '@reduxjs/toolkit';

export const weatherAdapter = createEntityAdapter({
  selectId: weathers => String(weathers.id),
});

export const weatherSelectors = weatherAdapter.getSelectors(
  state => state.weather,
);

export const weatherSlice = createSlice({
  name: 'weather',
  initialState: weatherAdapter.getInitialState(),
  reducers: {
    setWeather: weatherAdapter.setAll,
    deleteWeather: weatherAdapter.removeAll,
    updateWeather: weatherAdapter.updateOne,
  },
});

export const {setWeather, deleteWeather, updateWeather} = weatherSlice.actions;

export default weatherSlice.reducer;
