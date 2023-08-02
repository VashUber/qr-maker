import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  setResponseStatus(e, 200);

  const resp = userSchema.safeParse(body);
  if (!resp.success) {
    setResponseStatus(e, 401);
    return {
      msg: "error",
    };
  }

  try {
    await global.$prisma.user.create({ data: resp.data });
  } catch (error) {
    setResponseStatus(e, 401);
    return {
      msg: "error",
    };
  }

  return {
    msg: "success",
  };
});
