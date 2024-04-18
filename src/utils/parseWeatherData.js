export const parseWeatherData = data => {
  const {id, name, main, weather, dt} = data;
  return {
    id: id,
    city: name,
    temperature: Math.round(((main.temp - 32) * 5) / 9),
    icon: `http://openweathermap.org/img/wn/${weather[0].icon}.png`,
    date: new Date(dt * 1000).toISOString().slice(0, 10),
  };
};
