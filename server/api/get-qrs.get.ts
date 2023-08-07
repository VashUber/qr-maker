import { z } from 'zod'
import { getServerSession } from '#auth'

const perPage = 24

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

  const where = {
    user: {
      username: session.user.name!
    }
  }

  const [count, data] = await global.$prisma.$transaction([
    global.$prisma.codes.count({
      where
    }),
    global.$prisma.codes.findMany({
      take: perPage,
      skip: (page - 1) * perPage,
      where
    })
  ])

  return {
    totalPage: Math.ceil(count / perPage),
    data
  }
})
