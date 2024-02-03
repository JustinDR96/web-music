import { getSession } from "next-auth/react";

export default async function Welcome() {
  const getSessionData = async () => {
    const session = await getSession();
    return session;
  };

  const session = await getSessionData();

  if (!session) {
    return <div>Loading...</div>;
  }

  if (session) {
    const { user } = session as unknown as {
      user: { id: number; name: string; email: string; created_at: string };
    };
    return (
      <div>
        Bonjour {user.name}! Votre ID est {user.id} et votre email est{" "}
        {user.email}. Vous vous êtes inscrit le {user.created_at}.
      </div>
    );
  } else {
    return <div>Vous devez être connecté pour voir ces informations.</div>;
  }
}
