import axios from 'axios';
import AxiosManager from '@/api/AxiosManager';

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

api.interceptors.request.use((config) => AxiosManager.onRequestFulfilled(config));

api.interceptors.response.use(
  (response) => AxiosManager.onResponseFulfilled(response),
  (error) => AxiosManager.onResponseRejected(error),
);

export default api;
