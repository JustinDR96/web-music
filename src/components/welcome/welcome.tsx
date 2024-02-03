import { useSession } from "next-auth/client";

export default function Welcome() {
  const [session, loading] = useSession();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (session) {
    return <div>Bonjour {session.user.username}!</div>;
  } else {
    return <div>Vous devez être connecté pour voir ces informations.</div>;
  }
}
