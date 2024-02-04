import type { NextAuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Entrez votre identifiant",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Entrez votre mot de passe",
        },
      },
      async authorize(credentials) {
        const user = { id: "1", name: "root", password: "root" };
        if (
          credentials?.username === user.name &&
          credentials?.password === user.password
        ) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
};
