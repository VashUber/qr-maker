import { hash } from 'bcrypt'
import { userAuthScheme } from '~/scheme'

export default defineEventHandler(async (e) => {
  const body = await readBody(e)
  setResponseStatus(e, 200)

  const val = userAuthScheme.safeParse(body)
  if (!val.success) {
    setResponseStatus(e, 401)
    return {
      msg: 'error'
    }
  }

  val.data.password = await hash(val.data.password, 10)

  try {
    await global.$prisma.$transaction([
      global.$prisma.user.create({ data: val.data })
    ])
  } catch (error) {
    setResponseStatus(e, 401)
    return {
      msg: 'error'
    }
  }

  return {
    msg: 'success'
  }
})
