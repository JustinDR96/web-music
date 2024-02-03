import { getSession } from "next-auth/react";

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}

export default function Welcome({ session }: { session: any }) {
  if (session) {
    return <p>Bienvenue, {session.user?.name ?? "Unknown User"}!</p>;
  } else {
    return <p>Bienvenue, Visiteur!</p>;
  }
}
