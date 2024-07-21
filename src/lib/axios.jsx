import axios from "axios";
import { useEffect } from "react";


export const axiosInstance = axios.create({
  baseURL: "/api/v1",
  // baseURL: "http://localhost:8010/proxy/api/v1",
  // baseURL: "http://localhost:8888/api/v1",
});

export const axiosInstanceOriginal = axios.create({
  baseURL: "http://localhost:8888",
  // baseURL: "http://localhost:8888/api/v1",
});
export const axiosInstanceEnv = axios.create({
  baseURL: import.meta.env.API_URL,
  // baseURL: "http://localhost:8888/api/v1",
});

export const tokenCurr =localStorage.getItem('token');
