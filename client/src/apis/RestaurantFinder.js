import axios from "axios";

export default axios.create({
  // The baseURL should be the root of the API
  baseURL: "https://restaurant-finder-0xet.onrender.com/api/v1",
});
