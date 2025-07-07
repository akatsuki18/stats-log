import { createFileRoute, redirect } from '@tanstack/react-router'
import { AuthenticatedLayout } from '@/components/layout/authenticated-layout'
import { useAuthStore } from '@/stores/authStore'

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: ({ location }) => {
    const authUser = useAuthStore.getState().auth.user
    
    // If user is not authenticated, redirect to sign-in with current path
    if (!authUser || !authUser.supabaseUser) {
      throw redirect({
        to: '/sign-in',
        search: {
          redirect: location.href,
        },
      })
    }
    
    // If user is authenticated but doesn't have a team and not already on team-setup page
    if (authUser && !authUser.hasTeam && location.pathname !== '/team-setup') {
      throw redirect({
        to: '/team-setup',
      })
    }
  },
  component: AuthenticatedLayout,
})
