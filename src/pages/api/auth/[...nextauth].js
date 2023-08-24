import { getByEmail, verifyPass } from "@/services/users";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  session: {
    jwt: true,
  },
  providers: [
    CredentialsProvider({
      async authorize({ email, password }) {
        const user = getByEmail(email);
        if (!user) {
          throw new Error("User not Found");
        }
        const isValid = await verifyPass(user.password, password);
        if (!isValid) {
          throw new Error("Incorrect Password")
        }

        return { email };
      },
    }),
  ],
};
export default NextAuth(authOptions);