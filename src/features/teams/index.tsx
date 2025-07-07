import { useState } from 'react'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { getCurrentUserTeam } from './data/teams'
import { format } from 'date-fns'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { Pencil } from 'lucide-react'

export default function Teams() {
  const currentTeam = getCurrentUserTeam()
  const [isEditing, setIsEditing] = useState(false)
  const [teamName, setTeamName] = useState(currentTeam?.name || '')

  // If user doesn't have a team, show a message
  if (!currentTeam) {
    return (
      <>
        <Header fixed>
          <Search />
          <div className='ml-auto flex items-center space-x-4'>
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </Header>

        <Main>
          <div className='flex min-h-[calc(100vh-8rem)] items-center justify-center'>
            <Card className='max-w-md'>
              <CardHeader className='text-center'>
                <CardTitle>No Team Found</CardTitle>
                <CardDescription>
                  You don't have a team associated with your account yet.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </Main>
      </>
    )
  }

  const handleSave = () => {
    showSubmittedData({ name: teamName })
    setIsEditing(false)
  }

  const handleCancel = () => {
    setTeamName(currentTeam?.name || '')
    setIsEditing(false)
  }

  return (
    <>
      <Header fixed>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <ProfileDropdown />
        </div>
      </Header>

      <Main>
        <div className='mb-6'>
          <h2 className='text-2xl font-bold tracking-tight'>Team Settings</h2>
          <p className='text-muted-foreground'>
            Manage your team information.
          </p>
        </div>

        <Card className='max-w-2xl'>
          <CardHeader>
            <div className='flex items-center justify-between'>
              <div>
                <CardTitle>Team Information</CardTitle>
                <CardDescription>
                  View and edit your team details
                </CardDescription>
              </div>
              {!isEditing && (
                <Button
                  variant='outline'
                  size='sm'
                  onClick={() => setIsEditing(true)}
                  className='gap-2'
                >
                  <Pencil size={16} />
                  Edit
                </Button>
              )}
            </div>
          </CardHeader>
          <CardContent className='space-y-4'>
            <div className='grid gap-2'>
              <Label htmlFor='team-name'>Team Name</Label>
              {isEditing ? (
                <Input
                  id='team-name'
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  placeholder='Enter team name'
                />
              ) : (
                <div className='text-sm p-2 bg-muted rounded-md'>
                  {currentTeam?.name}
                </div>
              )}
            </div>

            <div className='grid gap-2'>
              <Label>Created At</Label>
              <div className='text-sm p-2 bg-muted rounded-md'>
                {currentTeam?.created_at ? format(new Date(currentTeam.created_at), 'PPP') : 'N/A'}
              </div>
            </div>

            <div className='grid gap-2'>
              <Label>Team ID</Label>
              <div className='text-sm p-2 bg-muted rounded-md'>
                {currentTeam?.id}
              </div>
            </div>

            {isEditing && (
              <div className='flex gap-2 pt-4'>
                <Button onClick={handleSave} size='sm'>
                  Save Changes
                </Button>
                <Button onClick={handleCancel} variant='outline' size='sm'>
                  Cancel
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      </Main>
    </>
  )
}
