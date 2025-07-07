import { createFileRoute } from '@tanstack/react-router'
import TeamSetup from '@/features/teams/team-setup'

export const Route = createFileRoute('/_authenticated/team-setup')({ 
  component: TeamSetup,
})
