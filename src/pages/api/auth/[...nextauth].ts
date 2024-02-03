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
        if (
          credentials &&
          typeof credentials.username === "string" &&
          credentials.username === "root" &&
          typeof credentials.password === "string" &&
          credentials.password === "root"
        ) {
          const user = {
            id: "1",
            name: "root",
            email: "root@example.com",
            password: "root",
          };
          return Promise.resolve(user);
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  // database: process.env.DATABASE_URL,
  jwt: {
    secret: process.env.SECRET,
  },
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Erreur 500
    verifyRequest: "/auth/verify-request", // Envoyer l'e-mail de vérification
    newUser: undefined, // Si l'inscription est désactivée, la valeur doit être undefined
  },
});
