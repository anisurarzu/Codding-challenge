import axios from "axios";

export const coreAxios = axios.create({
  baseURL: process.env.REACT_APP_MAIN_URL,
  headers: { "Access-Control-Allow-Origin": "*" },
});
