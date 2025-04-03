import { AUTH_CONFIG } from '@/constants/auth'
import { User } from '@/features/auth/types'
import { clearDataLSItem, getDataFromLS, setDataLS } from '@/lib/store'
import { destroyCookie, setCookie } from 'nookies'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: string | null
  user: User | null
  setToken: (token: string | null) => void
  setUser: (user: User | null) => void
}

const COOKIE_CONFIG = { maxAge: 30 * 24 * 60 * 60, path: '/' }

export const useAuthStore = create(
  persist<State>(
    (set) => ({
      token: getDataFromLS(AUTH_CONFIG.tokenKey),
      user: getDataFromLS(AUTH_CONFIG.userKey),
      setToken: (token) => {
        set({ token })
        if (token) {
          setCookie(null, AUTH_CONFIG.tokenKey, token, COOKIE_CONFIG)
          setDataLS(AUTH_CONFIG.tokenKey, token)
        } else {
          destroyCookie(null, AUTH_CONFIG.tokenKey)
          clearDataLSItem(AUTH_CONFIG.tokenKey)
        }
      },
      setUser: (user) => {
        set({ user })
        if (user) {
          setCookie(null, AUTH_CONFIG.userKey, JSON.stringify(user), COOKIE_CONFIG)
          setDataLS(AUTH_CONFIG.userKey, user)
        } else {
          destroyCookie(null, AUTH_CONFIG.userKey)
          clearDataLSItem(AUTH_CONFIG.userKey)
        }
      },
    }),
    {
      name: 'authStore',
    },
  ),
)
