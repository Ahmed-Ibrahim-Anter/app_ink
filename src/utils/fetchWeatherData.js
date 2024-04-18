import {RAPIDAPI_KEY} from '@env';
import axios from 'axios';
import {parseWeatherData} from './parseWeatherData';
import {setWeather} from '../redux/weather';
import {showToast} from './showToast';

export const fetchWeatherData = async (dispatch, fun, toast) => {
  try {
    const cities = ['cairo', 'riyadh', 'new york']; // Example cities

    const urls = cities.map(
      city => `https://open-weather13.p.rapidapi.com/city/${city}/EN`,
    );

    const responses = await Promise.all(
      urls.map(url =>
        axios.get(url, {
          headers: {
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com',
            'X-RapidAPI-Key': RAPIDAPI_KEY,
          },
        }),
      ),
    );

    const data = responses.map(res => parseWeatherData(res.data));
    dispatch(setWeather(data));
    fun();
  } catch (error) {
    console.error('Error fetching weather data:', error);
    fun();
    showToast(toast, error);
  }
};
