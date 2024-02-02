import { GetServerSideProps } from "next";
import { getSession, useSession } from "next-auth/react";

interface WelcomeProps {
  session: ReturnType<typeof useSession>[0] | null;
}

export default function Welcome({ session }: WelcomeProps) {
  console.log(session);
  if (session) {
    return <p>Bienvenue, {session.user.name}!</p>;
  } else {
    // Vous devez retourner quelque chose ici aussi, par exemple :
    return <p>Veuillez vous connecter.</p>;
  }
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  console.log(session);
  return {
    props: { session },
  };
};
