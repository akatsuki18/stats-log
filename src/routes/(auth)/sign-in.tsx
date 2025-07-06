import { createFileRoute, redirect } from '@tanstack/react-router'
import SignIn from '@/features/auth/sign-in'
import { useAuthStore } from '@/stores/authStore'

type SignInSearch = {
  redirect?: string
}

export const Route = createFileRoute('/(auth)/sign-in')({
  validateSearch: (search: Record<string, unknown>): SignInSearch => {
    return {
      redirect: search.redirect as string,
    }
  },
  beforeLoad: ({ search }) => {
    const authUser = useAuthStore.getState().auth.user
    
    // If user is already authenticated, redirect to intended page or dashboard
    if (authUser && authUser.firebaseUser) {
      throw redirect({
        to: search.redirect || '/',
      })
    }
  },
  component: SignIn,
})
