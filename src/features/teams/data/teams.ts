import { Team } from './schema'
import { useAuthStore } from '@/stores/authStore'
import { supabase } from '@/lib/supabase'

export const getCurrentUserTeam = async (): Promise<Team | null> => {
  const user = useAuthStore.getState().auth.user
  
  // Return null if user doesn't have a team
  if (!user?.hasTeam || !user?.supabaseUser) {
    return null
  }
  
  try {
    // Fetch user's team from Supabase
    const { data, error } = await supabase
      .from('teams')
      .select('id, name, created_at')
      .eq('user_id', user.supabaseUser.id)
      .single()
    
    if (error) {
      console.error('Error fetching user team:', error)
      return null
    }
    
    return data
  } catch (error) {
    console.error('Error fetching user team:', error)
    return null
  }
}

export const hasUserTeam = (): boolean => {
  const user = useAuthStore.getState().auth.user
  return user?.hasTeam ?? false
}

export const createUserTeam = async (teamName: string): Promise<Team | null> => {
  const user = useAuthStore.getState().auth.user
  
  if (!user?.supabaseUser) {
    throw new Error('User not authenticated')
  }
  
  try {
    // Create team in Supabase
    const { data, error } = await supabase
      .from('teams')
      .insert({
        name: teamName,
        user_id: user.supabaseUser.id,
      })
      .select('id, name, created_at')
      .single()
    
    if (error) {
      console.error('Error creating team:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('Error creating team:', error)
    throw error
  }
}

export const updateUserTeam = async (teamId: number, teamName: string): Promise<Team | null> => {
  const user = useAuthStore.getState().auth.user
  
  if (!user?.supabaseUser) {
    throw new Error('User not authenticated')
  }
  
  try {
    // Update team in Supabase
    const { data, error } = await supabase
      .from('teams')
      .update({ name: teamName })
      .eq('id', teamId)
      .eq('user_id', user.supabaseUser.id) // Ensure user owns the team
      .select('id, name, created_at')
      .single()
    
    if (error) {
      console.error('Error updating team:', error)
      throw error
    }
    
    return data
  } catch (error) {
    console.error('Error updating team:', error)
    throw error
  }
}
