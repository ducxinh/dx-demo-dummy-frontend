import { parseFirebaseUser } from '@/features/auth/lib/auth-helper'
import { useAuthStore } from '@/features/auth/store/authStore'
import { User } from '@/features/auth/types'
import { auth } from '@/services/firebase/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'

interface AuthContextType {
  user: User | null
  loading: boolean
  onSignIn: (user: User, callback: VoidFunction) => void
  onSignOut: (callback: VoidFunction) => void
  logout: () => void
}

const AuthContext = React.createContext<AuthContextType>(null!)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState<boolean>(true)
  const { user, setUser, setToken } = useAuthStore()

  const onSignIn = (newUser: User, callback: VoidFunction) => {
    setUser(newUser)
    callback()
  }

  const onSignOut = async (callback: VoidFunction) => {
    await signOut(auth)
    setUser(null)
    setToken(null)
    callback()
  }

  const logout = () => {
    setUser(null)
  }

  const value = { user, onSignIn, onSignOut, logout, loading }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log('user', user)
      if (user) {
        setUser(parseFirebaseUser(user))
      }
      setLoading(false)
    })

    return () => unsubscribe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return React.useContext(AuthContext)
}
