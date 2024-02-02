import NextAuth from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const user = { id: "1", name: "root", password: "root" };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  database: process.env.DATABASE_URL,
  session: {
    jwt: true,
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Erreur 500
    verifyRequest: "/auth/verify-request", // Envoyer l'e-mail de vérification
    newUser: undefined, // Si l'inscription est désactivée, la valeur doit être undefined
  },
});
