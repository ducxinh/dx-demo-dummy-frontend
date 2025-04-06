import { APP_CONFIG } from '@/constants/app'
import { apiClient } from '@/services/api'
import {
  AuthToken,
  AuthTokenProviderResponse,
  AuthTokenResponse,
  LoginPayload,
  SignupPayload,
  User,
} from '../types'

export const authApiService = {
  path: '/api/v1/auth',
  async signup(payload: SignupPayload): Promise<User> {
    const data = await apiClient.post(`${this.path}/signup`, payload)
    return data.data
  },
  async verifyEmail(payload: { token: string }): Promise<void> {
    await apiClient.post(`${this.path}/verify-email`, payload)
  },

  async login(payload: LoginPayload): Promise<AuthTokenResponse> {
    return apiClient.post(`${this.path}/login`, payload)
  },
  async loginCallback(socialProvider: string, payload: { idToken: string }): Promise<AuthToken> {
    return apiClient.post(`${this.path}/${socialProvider}/callback`, payload)
  },
  getSocialLoginUrl(socialType: string) {
    const version: number = 1
    if (version === 2) {
      if (typeof window !== 'undefined') {
        const redirectUri = `redirect_uri=${window.location.origin}/auth/login/callback?provider=google`
        return `${APP_CONFIG.API.URL}/auth/${socialType}/v2?${redirectUri}`
      }
    }
    return `${APP_CONFIG.API.URL}/auth/${socialType}`
  },

  async getAuthToken(provider: 'google', code: string): Promise<AuthTokenProviderResponse> {
    return apiClient.post(`${this.path}/${provider}/token`, { code })
  },

  async logout(): Promise<void> {
    return apiClient.post(`${this.path}/logout`, {})
  },

  async getMe(params: Record<string, unknown> = {}): Promise<User> {
    const data: User = await apiClient.get(`${this.path}/me`, { params })
    return data
  },

  async getProfile(): Promise<User> {
    return apiClient.get(`${this.path}/profile`)
  },

  async verifyEmailWithCode(payload: { code: string; email?: string }): Promise<AuthTokenResponse> {
    return await apiClient.post(`${this.path}/verify-email-code`, payload)
  },

  async resendVerificationEmail(payload: { email: string }) {
    const response = await apiClient.post(`${this.path}/resend-verification-email`, payload)
    return response.data
  },
}

export default authApiService
