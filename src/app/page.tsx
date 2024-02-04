import React from "react";
import Categories from "../components/categories/categories";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(options);

  return (
    <>
      {session ? <h1>Session</h1> : <h1>pas Session</h1>}
      <div className="home">
        <h1>Home</h1>
        <Categories />
      </div>
    </>
  );
}
