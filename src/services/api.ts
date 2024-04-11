import axios, { axiosInstance, AxiosRequestConfig } from 'axios';

//default config
const axiosParams = {
  baseUrl: import.meta.env.VITE_BACKEND_SERVER
};

const axiosInstance = axios.create(axiosParams);

const api = (axios: axiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config)
  };
};

export default api(axiosInstance);
