import { z } from "zod";

const queryScheme = z.object({
  user_id: z.preprocess((arg) => Number(arg), z.number()),
});

export default defineEventHandler(async (e) => {
  const q = getQuery(e);
  const val = queryScheme.safeParse(q);

  if (!val.success) {
    return {
      msg: "error",
    };
  }

  try {
    const [data] = await global.$prisma.$transaction([
      global.$prisma.codes.findMany({
        where: {
          userId: val.data.user_id,
        },
      }),
    ]);

    return {
      data,
    };
  } catch (error) {
    return {
      msg: "error",
    };
  }
});
