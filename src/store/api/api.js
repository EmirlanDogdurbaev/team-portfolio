import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000", 
});

export const API_URI = api.defaults.baseURL;
