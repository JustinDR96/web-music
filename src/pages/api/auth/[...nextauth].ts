import { Account, CallbacksOptions, Profile, User, Session } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import { QueryResult, QueryResultRow } from "pg";
import NextAuth from "next-auth";
import { sql } from "@vercel/postgres";

interface MyCallbacksOptions extends CallbacksOptions {
  createUser: ({
    name,
    email,
    password,
  }: {
    name: string;
    email: string;
    password: string;
  }) => Promise<QueryResult<QueryResultRow>>;
}

interface MyAuthOptions extends NextAuth.NextAuthOptions {
  callbacks: MyCallbacksOptions;
  database: string;
  providers: NextAuth.Provider[]; // Add the missing 'providers' property
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) {
          return null;
        }

        const user = await authenticateUser(
          credentials.username,
          credentials.password
        );

        if (user) {
          // Retournez un objet utilisateur avec les champs id et username
          console.log("user", user);
          return { id: user.id, username: user.username };
        } else {
          // Si l'utilisateur n'est pas trouvé ou si les informations d'identification sont incorrectes, retournez null
          return null;
        }
      },
    }),
  ],
  callbacks: {
    session: async (
      session: { user: { username: any } },
      user: { username: any }
    ) => {
      session.user.username = user.username;
      console.log("session", session);
      return Promise.resolve(session);
    },
  },
  database: {
    type: "postgres",
    port: 5432,
    database: process.env.POSTGRES_DATABASE,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: false,
  },
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
} as unknown as MyAuthOptions);

async function authenticateUser(username: string, password: string) {
  const user = await sql`SELECT * FROM users WHERE username = ${username}`;
  if (user.rowCount > 0 && user.rows[0].password === password) {
    return user.rows[0];
  } else {
    throw new Error("Invalid username or password");
  }
}
