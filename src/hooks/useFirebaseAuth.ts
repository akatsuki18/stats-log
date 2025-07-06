import { useEffect } from 'react'
import { onAuthStateChanged, User } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { useAuthStore } from '@/stores/authStore'

export function useFirebaseAuth() {
  const setFirebaseUser = useAuthStore((state) => state.auth.setFirebaseUser)
  const reset = useAuthStore((state) => state.auth.reset)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: User | null) => {
      if (user) {
        setFirebaseUser(user)
      } else {
        reset()
      }
    })

    return () => unsubscribe()
  }, [setFirebaseUser, reset])

  return {
    user: useAuthStore((state) => state.auth.user),
    isAuthenticated: !!useAuthStore((state) => state.auth.user),
  }
}