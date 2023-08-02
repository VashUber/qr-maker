import { userAuthScheme } from "~/scheme";

export default defineEventHandler(async (e) => {
  const body = await readBody(e);
  setResponseStatus(e, 200);

  const resp = userAuthScheme.safeParse(body);
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
