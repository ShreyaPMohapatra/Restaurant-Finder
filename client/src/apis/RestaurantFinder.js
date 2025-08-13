import axios from "axios";

export default axios.create({
  // Manually set the full URL here
  baseURL: "https://restaurant-finder-0xet.onrender.com/api/v1/restaurants",
});