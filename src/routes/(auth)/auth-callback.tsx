import { useEffect } from 'react'
import { useNavigate } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/stores/authStore'

function AuthCallback() {
  const navigate = useNavigate()
  const setSupabaseUser = useAuthStore((state) => state.auth.setSupabaseUser)

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        console.log('Auth callback started')
        
        // Handle the URL hash parameters
        const hashParams = new URLSearchParams(window.location.hash.substring(1))
        const accessToken = hashParams.get('access_token')
        const refreshToken = hashParams.get('refresh_token')
        
        console.log('URL hash params:', { accessToken: !!accessToken, refreshToken: !!refreshToken })
        
        if (accessToken && refreshToken) {
          // Set the session with the tokens from URL
          const { data, error } = await supabase.auth.setSession({
            access_token: accessToken,
            refresh_token: refreshToken,
          })
          
          if (error) {
            console.error('Auth session set error:', error)
            navigate({ to: '/sign-in' })
            return
          }
          
          if (data.session?.user) {
            console.log('Auth callback success:', data.session.user)
            setSupabaseUser(data.session.user)
            
            // Small delay to ensure state is set
            setTimeout(() => {
              navigate({ to: '/' })
            }, 100)
            return
          }
        }
        
        // Fallback: try to get existing session
        const { data, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Auth callback error:', error)
          navigate({ to: '/sign-in' })
          return
        }

        if (data.session?.user) {
          console.log('Auth callback success (fallback):', data.session.user)
          setSupabaseUser(data.session.user)
          navigate({ to: '/' })
        } else {
          console.log('No session in auth callback')
          navigate({ to: '/sign-in' })
        }
      } catch (error) {
        console.error('Auth callback error:', error)
        navigate({ to: '/sign-in' })
      }
    }

    handleAuthCallback()
  }, [navigate, setSupabaseUser])

  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='text-center'>
        <h2 className='text-xl font-semibold mb-2'>Signing you in...</h2>
        <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto'></div>
      </div>
    </div>
  )
}

export const Route = createFileRoute('/(auth)/auth-callback')({ 
  component: AuthCallback,
})
