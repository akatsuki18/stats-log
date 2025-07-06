import { Link, useRouter } from '@tanstack/react-router'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { signOutUser } from '@/lib/auth'
import { useAuthStore } from '@/stores/authStore'
import { toast } from 'sonner'

export function ProfileDropdown() {
  const router = useRouter()
  const reset = useAuthStore((state) => state.auth.reset)
  const authUser = useAuthStore((state) => state.auth.user)
  const firebaseUser = authUser?.firebaseUser

  // Create user data from Firebase with fallbacks
  const userData = {
    name: firebaseUser?.displayName || 
          firebaseUser?.email?.split('@')[0] || 
          'User',
    email: firebaseUser?.email || '',
    avatar: firebaseUser?.photoURL || '/avatars/01.png',
    initials: (firebaseUser?.displayName || firebaseUser?.email || 'U')
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2) || 'SN'
  }

  const handleLogout = async () => {
    try {
      await signOutUser()
      reset()
      toast.success('Successfully logged out!')
      router.navigate({ to: '/sign-in' })
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Logout failed:', error)
      toast.error('Failed to log out')
    }
  }

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost' className='relative h-8 w-8 rounded-full'>
          <Avatar className='h-8 w-8'>
            <AvatarImage src={userData.avatar} alt={userData.name} />
            <AvatarFallback>{userData.initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56' align='end' forceMount>
        <DropdownMenuLabel className='font-normal'>
          <div className='flex flex-col space-y-1'>
            <p className='text-sm leading-none font-medium'>{userData.name}</p>
            <p className='text-muted-foreground text-xs leading-none'>
              {userData.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link to='/settings'>
              Profile
              <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to='/settings'>
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to='/settings'>
              Settings
              <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>New Team</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout}>
          Log out
          <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
