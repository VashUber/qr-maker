import { z } from 'zod'
import { getServerSession } from '#auth'

const perPage = 10

const queryScheme = z.object({
  page: z.preprocess((v) => Number(v), z.number())
})

export default defineEventHandler(async (e) => {
  const session = await getServerSession(e)
  if (!session?.user) return

  const q = getQuery(e)
  const val = queryScheme.safeParse(q)
  if (!val.success) {
    return
  }
  const { page } = val.data

  return await global.$prisma.codes.findMany({
    take: perPage,
    skip: (page - 1) * perPage,
    where: {
      user: {
        username: session.user.name!
      }
    }
  })
})
