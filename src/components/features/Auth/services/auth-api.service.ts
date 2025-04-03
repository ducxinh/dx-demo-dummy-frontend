import { app } from '@/constants/app'
import { apiClient } from '../../../../services/api'

export const authApiService = {
  async signup(payload: { email: string; password: string }) {
    return apiClient.post('/api/v1/auth/signup', payload)
  },
  async confirmSignup(payload: { email: string; code: string }) {
    return apiClient.post('/api/v1/auth/confirm', payload)
  },
  async login(payload: any) {
    return apiClient.post('/api/v1/auth/login', payload)
  },

  getSocialLoginUrl(socialType: string) {
    // eslint-disable-next-line @typescript-eslint/no-inferrable-types
    const version: number = 1
    if (version === 2) {
      if (typeof window !== 'undefined') {
        const redirectUri = `redirect_uri=${window.location.origin}/auth/login/callback?provider=google`
        return `${app.api.url}/auth/${socialType}/v2?${redirectUri}`
      }
    }
    return `${app.api.url}/auth/${socialType}`
  },

  async getAuthToken(provider: 'google', code: string) {
    return apiClient.post(`/api/v1/auth/${provider}/token`, { code })
  },

  async loginCallbackV1(socialProvider: string, payload: any) {
    return apiClient.post(`/api/v1/auth/${socialProvider}/callback`, payload)
  },

  async loginCallback(socialProvider: string, payload: { idToken: string }) {
    return apiClient.post(`/api/v1/auth/${socialProvider}/callback`, payload)
  },

  async getMe() {
    return apiClient.get('/api/v1/auth/me')
  },

  async getProfile() {
    return apiClient.get('/api/v1/auth/profile')
  },

  async debug(payload: any) {
    return apiClient.post('/api/v1/auth/debug', payload)
  },
}

export default authApiService
