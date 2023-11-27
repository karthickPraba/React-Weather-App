import React, { useState } from 'react';
import '../components/app.css'
const LocationInput = ({ onLocationChange }) => {
  const [location, setLocation] = useState('');

  const handleInputChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLocationChange(location);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='enter'>
        Enter Location:
        <input type="text" value={location} onChange={handleInputChange} />
      </label>
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default LocationInput;
