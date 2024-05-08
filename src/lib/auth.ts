import type { NextAuthOptions, Session, TokenSet, User } from "next-auth";
import credentials from "next-auth/providers/credentials";
import googleCredentials from "next-auth/providers/google";
import { customVerify, verifyToken, customToken } from "@/helper/jwt";
import type { JWT } from "next-auth/jwt";
import type { CustomSession } from "@/interfaces";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    credentials({
      name: "Credentials",
      credentials: {
        access_token: {
          placeholder: "access_token",
          type: "access_token",
          label: "access_token",
        },
      },
      async authorize(credentials) {
        try {
          console.log(credentials, "<~ credentials");
          const { id } = verifyToken(credentials?.access_token);

          const user = {
            id,
            name: "user",
            access_token: credentials?.access_token,
          };

          return user;
        } catch (err) {
          return null;
        }
      },
    }),
    googleCredentials({
      clientId: process.env.GOOGLE_OAUTH_CLIENTID as string,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    signIn: "/login",
  },
  jwt: {
    decode({ secret, token }) {
      return customVerify(token, secret) as JWT;
    },
    encode({ secret, token }) {
      return customToken(token as JWT, secret);
    },
  },
  callbacks: {
    session({
      session,
      user,
      token,
    }: {
      session: Session | CustomSession | any;
      user: User;
      token: TokenSet;
    }) {
      session.user.id = token.id;
      session.user.access_token = token.access_token;
      return session;
    },
    jwt({
      token,
      user,
      account,
      profile,
      isNewUser,
    }: {
      token: JWT | any;
      user?: any;
      account?: any;
      profile?: any;
      isNewUser?: boolean | undefined;
    }) {
      if (user) {
        token.id = user.id;
      }
      if (account) {
        token.access_token = user?.access_token;
      }
      return token;
    },
  },
};
