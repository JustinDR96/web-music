import { useSession } from "next-auth/react";

export default function Welcome() {
  const { data: session } = useSession();

  if (session) {
    return <p>Bienvenue, {session.user?.name ?? "Unknown User"}!</p>;
  } else {
    return <p>not connect</p>;
  }
}
