import CredentialsProvider from "next-auth/providers/credentials";
import { NuxtAuthHandler } from "#auth";

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
      authorize(credentials: any) {
        const user = {
          id: "1",
          name: "J Smith",
          username: "jsmith",
          password: "hunter2",
        };

        if (
          credentials?.username === user.username &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          console.error(
            "Warning: Malicious login attempt registered, bad credentials provided"
          );

          return null;
        }
      },
    }),
  ],
});
