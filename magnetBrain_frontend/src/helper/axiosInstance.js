import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001/api', 
  timeout: 10000, 
//   headers: {
//     'Content-Type': 'application/json', 
//   },
});

