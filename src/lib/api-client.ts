import Axios, { type InternalAxiosRequestConfig } from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function authRequestInterceptor(config: InternalAxiosRequestConfig) {
  console.log('Request URL:', config.url);
  if (config.headers) {
    config.headers.Accept = 'application/json';
    if (window.location.pathname !== '/problem/upload') {
      if (
        config.method === 'post' ||
        config.method === 'put' ||
        config.method === 'patch'
      ) {
        config.headers['Content-Type'] = 'application/json';
      }
    }
    // 로그인 요청은 토큰을 붙이지 않는다
    if (!config.url?.includes('/api/v1/members/login')) {
      const token = sessionStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
  }

  config.withCredentials = true;
  return config;
}

export const httpClient = Axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

httpClient.interceptors.request.use(authRequestInterceptor);

httpClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      if (window.location.pathname !== '/login') {
        window.location.href = '/login';
      }
    }

    const message = error.response?.data?.message || error.message;
    console.error(message);

    return Promise.reject(error);
  }
);
