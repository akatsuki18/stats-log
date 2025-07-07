import { useEffect } from 'react'
import { User } from '@supabase/supabase-js'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'

export function useSupabaseAuth() {
  const setSupabaseUser = useAuthStore((state) => state.auth.setSupabaseUser)
  const reset = useAuthStore((state) => state.auth.reset)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session:', session) // Debug log
      if (session?.user) {
        console.log('Setting user:', session.user) // Debug log
        setSupabaseUser(session.user)
      } else {
        console.log('No session, resetting') // Debug log
        reset()
      }
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log('Auth state change:', event, session) // Debug log
        if (session?.user) {
          console.log('User signed in:', session.user) // Debug log
          setSupabaseUser(session.user)
        } else {
          console.log('User signed out') // Debug log
          reset()
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [setSupabaseUser, reset])

  return {
    user: useAuthStore((state) => state.auth.user),
    isAuthenticated: !!useAuthStore((state) => state.auth.user),
  }
}