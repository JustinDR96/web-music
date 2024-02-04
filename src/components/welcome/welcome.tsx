import React from "react";
import { options } from "../../app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Welcome() {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <>
      <div className="welcome">
        {session ? <h1>Bonjour, {user?.name}</h1> : <h1>Connectez-vous</h1>}
      </div>
    </>
  );
}
