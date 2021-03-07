import axios from 'axios';

export const baseURL = 'https://users-wispro.herokuapp.com/';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use(
  (config) => {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if (userData) {
      config.headers.Authorization = `Bearer ${userData.token}`;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default instance;
