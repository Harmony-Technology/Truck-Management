import axios from 'axios';
import { API_URL } from '@/lib/globals';
import JWTToken from './token';

const client = axios.create({
  baseURL: API_URL,
});

client.interceptors.request.use(
  function (config) {
    const token = JWTToken.getToken();

    if (token) {
      config.headers!['Authorization'] = token;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default client;