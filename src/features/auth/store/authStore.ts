import { AUTH_CONFIG } from '@/constants/auth'
import { User } from '@/features/auth/types'
import { clearDataLSItem, getDataFromLS, setDataLS } from '@/lib/store'
import { destroyCookie, setCookie } from 'nookies'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type State = {
  token: string | null
  user: User | null
  tempUser: User | null
  setToken: (token: string | null) => void
  setUser: (user: User | null) => void
  setTempUser: (tempUser: User | null) => void
}

const COOKIE_CONFIG = { maxAge: 30 * 24 * 60 * 60, path: '/' }

export const useAuthStore = create(
  persist<State>(
    (set) => ({
      token: getDataFromLS(AUTH_CONFIG.TOKEN_KEY),
      user: getDataFromLS(AUTH_CONFIG.USER_KEY, true),
      tempUser: getDataFromLS(AUTH_CONFIG.TEMP_USER_KEY, true),
      setToken: (token) => {
        set({ token })
        if (token) {
          setCookie(null, AUTH_CONFIG.TOKEN_KEY, token, COOKIE_CONFIG)
          setDataLS(AUTH_CONFIG.TOKEN_KEY, token)
        } else {
          destroyCookie(null, AUTH_CONFIG.TOKEN_KEY)
          clearDataLSItem(AUTH_CONFIG.TOKEN_KEY)
        }
      },
      setUser: (user) => {
        set({ user })
        if (user) {
          setCookie(null, AUTH_CONFIG.USER_KEY, JSON.stringify(user), COOKIE_CONFIG)
          setDataLS(AUTH_CONFIG.USER_KEY, user)
        } else {
          destroyCookie(null, AUTH_CONFIG.USER_KEY)
          clearDataLSItem(AUTH_CONFIG.USER_KEY)
        }
      },
      setTempUser: (tempUser) => {
        set({ tempUser })
        if (tempUser) {
          setCookie(null, AUTH_CONFIG.TEMP_USER_KEY, JSON.stringify(tempUser), COOKIE_CONFIG)
          setDataLS(AUTH_CONFIG.TEMP_USER_KEY, tempUser)
        } else {
          clearDataLSItem(AUTH_CONFIG.TEMP_USER_KEY)
        }
      },
    }),
    {
      name: 'authStore',
    },
  ),
)
