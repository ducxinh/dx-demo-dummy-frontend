import { useAuthStore } from '@/features/auth/store/authStore'
import { User } from '@/features/auth/types'
import React from 'react'

interface AuthContextType {
  user: User | null
  onSignIn: (user: User, callback: VoidFunction) => void
  onSignOut: (callback: VoidFunction) => void
  logout: () => void
}

const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { user, setUser, setToken } = useAuthStore()

  const onSignIn = (newUser: User, callback: VoidFunction) => {
    setUser(newUser)
    callback()
  }

  const onSignOut = (callback: VoidFunction) => {
    setUser(null)
    setToken(null)
    callback()
  }

  const logout = () => {
    setUser(null)
  }

  const value = { user, onSignIn, onSignOut, logout }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}
