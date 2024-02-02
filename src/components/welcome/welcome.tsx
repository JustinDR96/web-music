import { GetServerSideProps } from "next";
import { getSession, Session } from "next-auth/react";

interface WelcomeProps {
  session: Session | null;
}

export default function Welcome({ session }: WelcomeProps) {
  console.log(session);
  if (session) {
    return <p>Bienvenue, {session.user.name}!</p>;
  } else {
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  return {
    props: { session },
  };
};
