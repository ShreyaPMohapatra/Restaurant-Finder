import React, { useState, createContext } from 'react';
// Correct import path to go up one level and then into the apis folder
import RestaurantFinder from '../apis/RestaurantFinder'; 

// Create a context to hold the state
export const RestaurantsContext = createContext();

// Create a provider component that will wrap your app
export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  const addRestaurant = (restaurant) => {
    // Add the new restaurant to the existing array
    setRestaurants([...restaurants, restaurant]);
  };

  const getRestaurants = async () => {
    try {
      const response = await RestaurantFinder.get('/restaurants');
      setRestaurants(response.data.data.restaurants);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        setRestaurants,
        addRestaurant,
        getRestaurants, // We are now providing the function to get all restaurants
        selectedRestaurant,
        setSelectedRestaurant,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
