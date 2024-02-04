import React from "react";
import Categories from "../components/categories/categories";
import { options } from "./api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import Welcome from "@/components/welcome/welcome";

export default async function Home() {
  const session = await getServerSession(options);
  const user = session?.user;
  return (
    <div className="home">
      <Welcome />
      <h1>Home</h1>
      <Categories />
    </div>
  );
}
