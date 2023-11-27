import React from 'react';
import '../components/app.css'

const WeatherDisplay = ({ weatherData }) => {
  return (
    <div className="weather-container">
      <h2 className='info'>Weather Information</h2>
      {weatherData ? (
        <div>
          <p>Location: {weatherData.name}</p>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Condition: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt="Weather Icon"
          />
        </div>
      ) : (
        <p>No weather data available</p>
      )}
    </div>
  );
};

export default WeatherDisplay;
