import { useSupabaseAuth } from '@/hooks/useSupabaseAuth'
import { ReactNode } from 'react'

interface SupabaseAuthProviderProps {
  children: ReactNode
}

export function SupabaseAuthProvider({ children }: SupabaseAuthProviderProps) {
  useSupabaseAuth()
  
  return <>{children}</>
}