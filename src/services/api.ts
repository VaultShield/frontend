import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

/**
 * @typedef {Object} axiosParams - Configuration options for Axios requests.
 * @property {string} baseUrl - The base URL for the requests.
 */
interface axiosParams {
  baseUrl: string;
}

/**
 * Default configuration for Axios requests.
 * @type {axiosParams}
 */
const params: axiosParams = {
  baseUrl: import.meta.env.VITE_BACKEND_SERVER //backend url.
  //baseUrl: '/'  // use this for build
};

/**
 * Configuration object for Axios.
 * @type {AxiosRequestConfig}
 */
const axiosConfig: AxiosRequestConfig = {
  baseURL: params.baseUrl
};

/**
 * Creates an API object for making HTTP requests.
 * @param {AxiosInstance} axios - An Axios instance.
 * @returns {Object} - The API object with HTTP methods.
 */
const axiosInstance: AxiosInstance = axios.create(axiosConfig);
const api = (axios: AxiosInstance) => {
  return {
    /**
     * Sends a GET request.
     * @template T - The response data type.
     * @param {string} url - The URL for the request.
     * @param {AxiosRequestConfig} [config] - Optional request configuration.
     * @returns {Promise<T>} - The promise that resolves to the response data.
     */
    get: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.get<T>(url, config),

    /**
     * Sends a POST request.
     * @template T - The response data type.
     * @param {string} url - The URL for the request.
     * @param {unknown} body - The request body.
     * @param {AxiosRequestConfig} [config] - Optional request configuration.
     * @returns {Promise<T>} - The promise that resolves to the response data.
     */
    post: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.post<T>(url, body, config),

    /**
     * Sends a DELETE request.
     * @template T - The response data type.
     * @param {string} url - The URL for the request.
     * @param {AxiosRequestConfig} [config] - Optional request configuration.
     * @returns {Promise<T>} - The promise that resolves to the response data.
     */
    delete: <T>(url: string, config: AxiosRequestConfig = {}) =>
      axios.delete<T>(url, config),

    /**
     * Sends a PATCH request.
     * @template T - The response data type.
     * @param {string} url - The URL for the request.
     * @param {unknown} body - The request body.
     * @param {AxiosRequestConfig} [config] - Optional request configuration.
     * @returns {Promise<T>} - The promise that resolves to the response data.
     */
    patch: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.patch<T>(url, body, config),

    /**
     * Sends a PUT request.
     * @template T - The response data type.
     * @param {string} url - The URL for the request.
     * @param {unknown} body - The request body.
     * @param {AxiosRequestConfig} [config] - Optional request configuration.
     * @returns {Promise<T>} - The promise that resolves to the response data.
     */
    put: <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) =>
      axios.put<T>(url, body, config)
  };
};

export default api(axiosInstance);
