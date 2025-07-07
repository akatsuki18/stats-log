import { useState } from 'react'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from '@tanstack/react-router'
import { Header } from '@/components/layout/header'
import { Main } from '@/components/layout/main'
import { ProfileDropdown } from '@/components/profile-dropdown'
import { Search } from '@/components/search'
import { ThemeSwitch } from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useAuthStore } from '@/stores/authStore'
import { showSubmittedData } from '@/utils/show-submitted-data'
import { createUserTeam } from './data/teams'

const formSchema = z.object({
  name: z.string().min(1, 'Team name is required.').min(2, 'Team name must be at least 2 characters long.'),
})

type TeamSetupForm = z.infer<typeof formSchema>

export default function TeamSetup() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const setUserHasTeam = useAuthStore((state) => state.auth.setUserHasTeam)

  const form = useForm<TeamSetupForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
    },
  })

  const onSubmit = async (data: TeamSetupForm) => {
    setIsLoading(true)
    
    try {
      // Create team in Supabase
      const team = await createUserTeam(data.name)
      
      if (team) {
        showSubmittedData({ teamName: data.name, message: 'Team created successfully!' })
        
        // Update the user's team status
        setUserHasTeam(true)
        
        // Redirect to dashboard
        navigate({ to: '/' })
      }
    } catch (error) {
      console.error('Error creating team:', error)
      showSubmittedData({ error: 'Failed to create team. Please try again.' })
    } finally {
      setIsLoading(false)
    }
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
        <div className='flex min-h-[calc(100vh-8rem)] items-center justify-center'>
          <Card className='w-full max-w-md'>
            <CardHeader className='text-center'>
              <CardTitle>Welcome! Let's set up your team</CardTitle>
              <CardDescription>
                To get started, please create your team. You'll be able to manage team settings later.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                  <FormField
                    control={form.control}
                    name='name'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Team Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder='Enter your team name'
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type='submit'
                    className='w-full'
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Team...' : 'Create Team'}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </Main>
    </>
  )
}
