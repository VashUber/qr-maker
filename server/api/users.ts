export default defineEventHandler(async (e) => {
  return await global.$prisma.user.findMany();
});
