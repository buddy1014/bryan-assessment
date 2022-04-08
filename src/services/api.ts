import axios from "axios";

export const API = axios.create({
  baseURL: process.env.REACT_APP_WEATHER_API_URL,
  headers: {
    "x-token": process.env.REACT_APP_WEATHER_API_TOKEN || "",
  },
});
