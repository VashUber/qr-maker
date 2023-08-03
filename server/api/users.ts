export default defineEventHandler(async () => {
  return await global.$prisma.user.findMany()
})
