// src/api/api-client.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
})

// Add request interceptor for auth tokens, etc.
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('auth_token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Response interceptor for error handling
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle global errors (like 401 unauthorized)
    if (error.response?.status === 401) {
      // Redirect to login or refresh token
    }
    return Promise.reject(error)
  },
)

// Generic request function
export const apiClient = {
  get: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.get(url, config).then((res: AxiosResponse<T>) => res.data)
  },
  post: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.post(url, data, config).then((res: AxiosResponse<T>) => res.data)
  },
  put: <T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.put(url, data, config).then((res: AxiosResponse<T>) => res.data)
  },
  delete: <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return axiosInstance.delete(url, config).then((res: AxiosResponse<T>) => res.data)
  },
}
