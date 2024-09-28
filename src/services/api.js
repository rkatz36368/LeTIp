import axios from 'axios';
import { EventBus } from '../eventbus'

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
})


api.interceptors.response.use(
    response => response,
    error => {
      EventBus.$emit('api-error', error.response?.data?.message || 'An unexpected error occurred.');
      return Promise.reject(error);
    }
  );

export default api