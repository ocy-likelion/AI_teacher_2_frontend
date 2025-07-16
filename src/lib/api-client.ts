import Axios, { type InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  if (config.headers) {
    config.headers.Accept = 'application/json';
  }
  config.withCredentials = true;
  return config;
}

export const httpClient = Axios.create({
  baseURL: API_BASE_URL,
});

httpClient.interceptors.request.use(authRequestInterceptor);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (window.location.pathname !== '/onboarding') {
        window.location.href = '/onboarding';
      }
    }

    const message = error.response?.data?.message || error.message;
    console.error(message);

    return Promise.reject(error);
  }
);
