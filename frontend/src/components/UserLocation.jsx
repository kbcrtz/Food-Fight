import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Bracket from '../pages/bracket';
import { YelpContext } from '../context/YelpContext';
import { useContext } from 'react';

const UserLocation = () => {
  const [location, setLocation] = useState({ lat: null, lng: null });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
const {setRestaurants} = useContext(YelpContext);
  const toBracket = () => {
    navigate('/Bracket');
  };

  const getLocation = () => {
    console.log("getting location");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          fetchRestaurants(position.coords.latitude, position.coords.longitude);
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
  const fetchRestaurants = async (latitude, longitude) => {
    try{
      const response = await axios.get(
        `http://localhost:8000/api/restaurants?latitude=${latitude}&longitude=${longitude}`
      );
      console.log(response.data.businesses);
      setRestaurants(response.data.businesses);
      toBracket();
    }catch(error){
      console.error("Error fetching Yelp data:", error);
    }
  }

  return (
    <div>
      <h1>Get User Location</h1>
      <button onClick={() => getLocation()}>Get Current Location</button>
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
