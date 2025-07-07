import { z } from 'zod'

export const teamSchema = z.object({
  id: z.number(),
  name: z.string(),
  created_at: z.string(),
})

export type Team = z.infer<typeof teamSchema>
