import { getServerSession } from '#auth'

export default defineEventHandler(async (e) => {
  const session = await getServerSession(e)
  if (!session?.user) return

  return await global.$prisma.codes.findMany({
    where: {
      user: {
        username: session.user.name!
      }
    }
  })
})
