import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";
import { userAuthScheme } from "~/scheme";

export default NuxtAuthHandler({
  secret: "your-secret-here",
  providers: [
    // @ts-expect-error
    CredentialsProvider.default({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials: unknown) {
        try {
          const resp = userAuthScheme.safeParse(credentials);
          if (!resp.success) {
            return null;
          }

          const user = await global.$prisma.user.findFirstOrThrow({
            where: {
              username: resp.data.username,
            },
          });

          if (user.password !== resp.data.password) {
            return null;
          }

          return { name: user.username };
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
