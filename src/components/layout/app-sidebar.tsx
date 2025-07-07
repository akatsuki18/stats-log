import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar'
import { NavGroup } from '@/components/layout/nav-group'
import { NavUser } from '@/components/layout/nav-user'
import { TeamSwitcher } from '@/components/layout/team-switcher'
import { sidebarData } from './data/sidebar-data'
import { useAuthStore } from '@/stores/authStore'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const authUser = useAuthStore((state) => state.auth.user)
  const supabaseUser = authUser?.supabaseUser

  // Create user object from Supabase data with fallbacks
  const user = {
    name: supabaseUser?.user_metadata?.full_name || 
          supabaseUser?.user_metadata?.name ||
          supabaseUser?.email?.split('@')[0] || 
          'User',
    email: supabaseUser?.email || '',
    avatar: supabaseUser?.user_metadata?.avatar_url || 
            supabaseUser?.user_metadata?.picture || 
            '/avatars/shadcn.jpg',
  }

  return (
    <Sidebar collapsible='icon' variant='floating' {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={sidebarData.teams} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarData.navGroups.map((props) => (
          <NavGroup key={props.title} {...props} />
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
