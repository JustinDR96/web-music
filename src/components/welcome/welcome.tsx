import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";
import { Session } from "next-auth";

interface WelcomeProps {
  session: Session | null;
}

export default function Welcome({ session }: WelcomeProps) {
  console.log(session);
  if (session) {
    return <p>Bienvenue, {session.user?.name ?? "Unknown User"}!</p>;
  } else {
    {
      ("");
    }
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  return {
    props: { session },
  };
};
