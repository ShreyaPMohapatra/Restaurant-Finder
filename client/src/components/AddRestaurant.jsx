import React, { useState } from 'react';
// The correct path is '../apis/RestaurantFinder'
import RestaurantFinder from '../apis/RestaurantFinder';

const AddRestaurant = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [priceRange, setPriceRange] = useState('Price Range');

  const handleAddRestaurant = async (e) => {
    e.preventDefault();
    try {
      const response = await RestaurantFinder.post('/restaurants', {
        name,
        location,
        price_range: priceRange,
      });

      console.log(response);

      setName('');
      setLocation('');
      setPriceRange('Price Range');
      
      // After a successful POST request, you need to trigger a refresh
      // of the restaurant list to show the newly added restaurant.
      // This is often done by updating a state variable in a parent component
      // or using a state management library.
      
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleAddRestaurant} className="flex flex-col sm:flex-row gap-4 p-4 bg-gray-100 rounded-lg shadow-md">
        <div className="flex-grow">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Restaurant Name"
          />
        </div>
        <div className="flex-grow">
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Location"
          />
        </div>
        <div className="flex-grow-0 w-full sm:w-auto">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500"
          >
            <option disabled>Price Range</option>
            <option value="1">$</option>
            <option value="2">$$</option>
            <option value="3">$$$</option>
            <option value="4">$$$$</option>
            <option value="5">$$$$$</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full sm:w-auto px-4 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddRestaurant;
