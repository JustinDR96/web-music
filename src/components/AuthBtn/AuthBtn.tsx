/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { signOut } from "next-auth/react";

export default function AuthBtn() {
  const handleSignOut = () => {
    signOut();
    console.log("Bien déconnecté");
  };

  return (
    <div className="authbtn">
      <button className="connect">
        <Link href="/api/auth/signin">Se connecter</Link>
      </button>
      <button className="register">S'inscrire</button>
      <button className="logout" onClick={() => handleSignOut()}>
        Se deconnecter
      </button>
    </div>
  );
}
