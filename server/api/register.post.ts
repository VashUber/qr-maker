import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (e) => {
  const body = await readBody(e);

  const resp = userSchema.safeParse(body);
  if (!resp.success) {
    return {
      msg: "error",
    };
  }

  await global.$prisma.user.create({ data: resp.data });

  return {
    msg: "success",
  };
});
