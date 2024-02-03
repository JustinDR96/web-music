import React from "react";
import Categories from "@/components/categories/categories";
import Welcome from "@/components/welcome/welcome";
export default function home() {
  return (
    <div className="home">
      <h1>Home</h1>
      <Welcome session={{}} />
      <Categories />
    </div>
  );
}
