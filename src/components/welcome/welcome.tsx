/* eslint-disable @next/next/no-img-element */
import React from "react";
import { options } from "../../app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Welcome() {
  const session = await getServerSession(options);
  const user = session?.user;
  console.log(session);
  return (
    <>
      <div className="welcome">
        {session ? (
          <>
            <div className="connect">
              <img src={user?.image ?? ""} alt="" />
              <h1>Welcome, {user?.name ?? ""}</h1>
            </div>
          </>
        ) : (
          <h1>Connectez-vous</h1>
        )}
      </div>
    </>
  );
}
