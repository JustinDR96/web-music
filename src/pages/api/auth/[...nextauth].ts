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
      authorize: async (credentials: {
        username: string;
        password: string;
      }) => {
        // Ajoutez ici la logique pour vérifier les identifiants de l'utilisateur
        // Vous pouvez par exemple vérifier les identifiants dans votre base de données PostgreSQL
        // Si les identifiants sont valides, retournez un objet { id: user.id, name: user.name, email: user.email }
        // Sinon, retournez null
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
