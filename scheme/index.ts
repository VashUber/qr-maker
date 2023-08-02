import { z } from "zod";

export const userAuthScheme = z.object({
  username: z.string(),
  password: z.string(),
});
