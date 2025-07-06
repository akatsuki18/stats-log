import { GoogleAuthProvider, signInWithPopup, signOut, User } from 'firebase/auth'
import { auth } from './firebase'

const googleProvider = new GoogleAuthProvider()

export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    return result.user
  } catch (error: unknown) {
    // eslint-disable-next-line no-console
    console.error('Google sign in error:', error)
    
    // Handle specific Firebase auth errors
    if (error && typeof error === 'object' && 'code' in error) {
      const authError = error as { code: string }
      if (authError.code === 'auth/popup-closed-by-user') {
        throw new Error('Sign in was cancelled')
      }
      if (authError.code === 'auth/popup-blocked') {
        throw new Error('Pop-up was blocked by the browser')
      }
      if (authError.code === 'auth/cancelled-popup-request') {
        throw new Error('Sign in request was cancelled')
      }
    }
    
    throw new Error('Failed to sign in with Google')
  }
}

export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth)
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Sign out error:', error)
    throw error
  }
}

export const getCurrentUser = (): User | null => {
  return auth.currentUser
}