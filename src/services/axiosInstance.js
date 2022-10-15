import axios from 'axios';

const token = JSON.parse(localStorage.getItem('token'));

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
    //prettier-ignore
    'x-token': token,
  };

  return config;
});

export default axiosInstance;
