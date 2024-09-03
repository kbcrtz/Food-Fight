import React, { useState } from 'react';

const UserLocation = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setError(null); // Clear any previous errors
        },
        (error) => {
          setError('Unable to retrieve your location');
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
    }
  };

  return (
    <div>
      <h1>Get User Location</h1>
      <button onClick={getLocation}>Get Current Location</button>
      {location.lat && location.lng ? (
        <div>
          <h3>Your Current Location:</h3>
          <p>Latitude: {location.lat}</p>
          <p>Longitude: {location.lng}</p>
        </div>
      ) : (
        <p>{error}</p>
      )}
    </div>
  );
};

export default UserLocation;
