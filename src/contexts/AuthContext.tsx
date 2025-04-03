import { AUTH_CONFIG } from '@/constants/auth'
import Cookies from 'js-cookie'
import React from 'react'

interface AuthContextType {
  user: any
  onSignIn: (user: any, callback: VoidFunction) => void
  onSignOut: (callback: VoidFunction) => void
}

const resolveCookieAuthUser = () => {
  const cacheUser = Cookies.get(AUTH_CONFIG.userKey)
  if (cacheUser) {
    return JSON.parse(cacheUser)
  }
  return undefined
}
const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(resolveCookieAuthUser())

  const onSignIn = (newUser: string, callback: VoidFunction) => {
    setUser(newUser)
    callback()
  }

  const onSignOut = (callback: VoidFunction) => {
    if (typeof window !== 'undefined') {
      window.localStorage.removeItem(AUTH_CONFIG.userKey)
      window.localStorage.removeItem(AUTH_CONFIG.tokenKey)
    }
    Cookies.set(AUTH_CONFIG.userKey, '')
    Cookies.set(AUTH_CONFIG.userKey, '')
    setUser(null)
    callback()
  }

  const value = { user, onSignIn, onSignOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}
