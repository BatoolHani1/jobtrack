import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { z } from "zod";
import { authConfig } from "./auth.config";
import prisma from "@/lib/prisma";

async function getUser(email) {
  try {
    return await prisma.user.findUnique({ where: { email } });
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw error;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const schema = z.object({
          email: z.email(),
          password: z.string().min(8),
        });

        const result = schema.safeParse(credentials);

        if (!result.success) {
          return null;
        }

        const { email, password } = result.data;

        const user = await getUser(email);
        if (!user) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(password, user.password);

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
});
