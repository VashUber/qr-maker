import { z } from 'zod'
import { getServerSession } from '#auth'

const qrScheme = z.object({
  content: z.string(),
  title: z.string()
})

export default defineEventHandler(async (e) => {
  const session = await getServerSession(e)
  if (!session?.user) return

  setResponseStatus(e, 200)
  const body = await readBody(e)
  const val = qrScheme.safeParse(body)

  if (!val.success) {
    setResponseStatus(e, 401)

    return {
      msg: 'error'
    }
  }

  await global.$prisma.codes.create({
    data: {
      content: val.data.content,
      title: val.data.title,
      user: {
        connect: {
          username: session.user.name!
        }
      }
    }
  })

  return {
    msg: 'success'
  }
})
