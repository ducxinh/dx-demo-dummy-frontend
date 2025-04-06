import { APP_CONFIG } from '@/constants/app'
import { AUTH_CONFIG } from '@/constants/auth'
import { getDataFromLS } from '@/lib/store'
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

const apiClient = axios.create({
  baseURL: APP_CONFIG.API.URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
})

function onResponse(response: AxiosResponse): AxiosResponse {
  return response.data
}

async function onRequest(config: InternalAxiosRequestConfig): Promise<InternalAxiosRequestConfig> {
  try {
    const token = getDataFromLS(AUTH_CONFIG.TOKEN_KEY)
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
  } catch (error) {
    console.error('Error setting authorization header:', error)
  }

  return config
}

function onError(error: AxiosError): never {
  // console.log('error', error, error.response, error?.response?.status)
  if (error?.response?.status === 401) {
    if (typeof window !== 'undefined') {
      // console.log('onError', error)
      window.location.href = '/login'
    }
  }
  throw error
}

apiClient.interceptors.request.use(onRequest)
apiClient.interceptors.response.use(onResponse, onError)

export const setHeader = (authToken: { token_type: string; access_token: string }) => {
  apiClient.defaults.headers.common.Authorization = `${authToken.token_type} ${authToken.access_token}`

  if (typeof window !== 'undefined') {
    window.localStorage.setItem(AUTH_CONFIG.TOKEN_KEY, JSON.stringify(authToken))
  }
}

// if (typeof window !== 'undefined' && window.localStorage.getItem(AUTH_CONFIG.TOKEN_KEY)) {
//   if (window.localStorage.getItem(AUTH_CONFIG.TOKEN_KEY)) {
//     try {
//       const authToken = JSON.parse(window.localStorage.getItem(AUTH_CONFIG.TOKEN_KEY) || '{}')
//       setHeader(authToken)
//     } catch (error) {
//       console.error('Error parsing auth token:', error)
//     }
//   }
// }

export { apiClient }
