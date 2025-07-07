import Cookies from 'js-cookie'
import { create } from 'zustand'
import { User } from '@supabase/supabase-js'

const ACCESS_TOKEN = 'thisisjustarandomstring'

interface AuthUser {
  accountNo: string
  email: string
  role: string[]
  exp: number
  hasTeam: boolean
  supabaseUser?: User | null
}

interface AuthState {
  auth: {
    user: AuthUser | null
    setUser: (user: AuthUser | null) => void
    setSupabaseUser: (supabaseUser: User | null) => void
    setUserHasTeam: (hasTeam: boolean) => void
    accessToken: string
    setAccessToken: (accessToken: string) => void
    resetAccessToken: () => void
    reset: () => void
  }
}

export const useAuthStore = create<AuthState>()((set) => {
  const cookieState = Cookies.get(ACCESS_TOKEN)
  const initToken = cookieState ? JSON.parse(cookieState) : ''
  return {
    auth: {
      user: null,
      setUser: (user) =>
        set((state) => ({ ...state, auth: { ...state.auth, user } })),
      setSupabaseUser: (supabaseUser) =>
        set((state) => ({
          ...state,
          auth: {
            ...state.auth,
            user: state.auth.user
              ? { ...state.auth.user, supabaseUser }
              : supabaseUser
              ? {
                  accountNo: supabaseUser.id,
                  email: supabaseUser.email || '',
                  role: ['user'],
                  exp: 0,
                  hasTeam: false,
                  supabaseUser,
                }
              : null,
          },
        })),
      setUserHasTeam: (hasTeam) =>
        set((state) => ({
          ...state,
          auth: {
            ...state.auth,
            user: state.auth.user ? { ...state.auth.user, hasTeam } : null,
          },
        })),
      accessToken: initToken,
      setAccessToken: (accessToken) =>
        set((state) => {
          Cookies.set(ACCESS_TOKEN, JSON.stringify(accessToken))
          return { ...state, auth: { ...state.auth, accessToken } }
        }),
      resetAccessToken: () =>
        set((state) => {
          Cookies.remove(ACCESS_TOKEN)
          return { ...state, auth: { ...state.auth, accessToken: '' } }
        }),
      reset: () =>
        set((state) => {
          Cookies.remove(ACCESS_TOKEN)
          return {
            ...state,
            auth: { ...state.auth, user: null, accessToken: '' },
          }
        }),
    },
  }
})

// export const useAuth = () => useAuthStore((state) => state.auth)
