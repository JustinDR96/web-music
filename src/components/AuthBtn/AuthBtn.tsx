/* eslint-disable react/no-unescaped-entities */
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthBtn() {
  const handleSignOut = () => {
    console.log("Bien déconnecté");
  };

  return (
    <div className="authbtn">
      <button className="connect">
        <Link href="/">Se connecter</Link>
      </button>
      <button className="register">S'inscrire</button>
      <button className="logout" onClick={() => handleSignOut()}>
        Se deconnecter
      </button>
    </div>
  );
}
