import axios from "axios";

export default axios.create({
  // The baseURL should be the root of your API, which is your live Render URL
  baseURL: "https://restaurant-finder-ao74.onrender.com/api/v1",
});