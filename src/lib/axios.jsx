import axios from "axios";
import { useEffect } from "react";


export const axiosInstance = axios.create({
  baseURL: "http://localhost:8010/reverse/api/v1",
  // baseURL: "http://localhost:8888/api/v1",
});

export const axiosInstanceOriginal = axios.create({
  baseURL: "http://localhost:8888",
  // baseURL: "http://localhost:8888/api/v1",
});

export const tokenCurr =localStorage.getItem('token');
