import { useFirebaseAuth } from '@/hooks/useFirebaseAuth'
import { ReactNode } from 'react'

interface FirebaseAuthProviderProps {
  children: ReactNode
}

export function FirebaseAuthProvider({ children }: FirebaseAuthProviderProps) {
  useFirebaseAuth()
  
  return <>{children}</>
}