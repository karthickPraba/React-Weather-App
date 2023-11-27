import React, { useState } from 'react';
import axios from 'axios';
import LocationInput from '../src/components/location';
import WeatherDisplay from '../src/components/display';
import '../src/components/app.css';

const App = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLocationChange = async (newLocation) => {
    setLocation(newLocation);
    setLoading(true);
    setError(null);

    try {
      const apiKey = 'Your_API_Key';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${newLocation}&appid=${apiKey}&units=metric`;

      const response = await axios.get(apiUrl);
      setWeatherData(response.data);
    } catch (error) {
      setError('Error fetching weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="header">React Weather App</div>
      <div className="input-container">
        <LocationInput onLocationChange={handleLocationChange} />
      </div>
      <div className="weather-container">
        {loading && <p className="loading">Loading...</p>}
        {error && <p className="error">{error}</p>}
        <WeatherDisplay weatherData={weatherData} />
      </div>
    </div>
  );
};

export default App;
