import { HTMLAttributes, useState } from 'react'
import { useRouter, useSearch } from '@tanstack/react-router'
import { IconBrandGoogle } from '@tabler/icons-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { signInWithGoogle } from '@/lib/auth'
import { useAuthStore } from '@/stores/authStore'
import { toast } from 'sonner'

type UserAuthFormProps = HTMLAttributes<HTMLDivElement>

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)
  const setFirebaseUser = useAuthStore((state) => state.auth.setFirebaseUser)
  const router = useRouter()
  const search = useSearch({ from: '/(auth)/sign-in' })

  async function handleGoogleSignIn() {
    setIsGoogleLoading(true)
    try {
      const user = await signInWithGoogle()
      if (user) {
        setFirebaseUser(user)
        toast.success('Successfully signed in with Google!')
        
        // Redirect to original page or dashboard
        const redirectTo = search.redirect || '/'
        router.navigate({ to: redirectTo })
      }
    } catch (error: unknown) {
      // eslint-disable-next-line no-console
      console.error('Google sign in failed:', error)
      const errorMessage = error instanceof Error ? error.message : 'Failed to sign in with Google'
      toast.error(errorMessage)
    } finally {
      setIsGoogleLoading(false)
    }
  }

  return (
    <div className={cn('flex flex-col gap-4', className)} {...props}>
      <Button
        size="lg"
        variant="outline"
        type="button"
        disabled={isGoogleLoading}
        onClick={handleGoogleSignIn}
        className="w-full"
      >
        {isGoogleLoading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
        ) : (
          <IconBrandGoogle className="mr-2 h-4 w-4" />
        )}
        {isGoogleLoading ? 'Signing in...' : 'Continue with Google'}
      </Button>
    </div>
  )
}
