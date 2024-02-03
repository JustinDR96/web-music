/* eslint-disable react/no-unescaped-entities */
import { signOut } from "next-auth/react";
import Link from "next/link";

export default function AuthBtn() {
  const handleSignOut = () => {
    signOut();
    console.log("Bien déconnecté");
  };
  return (
    <div className="authbtn">
      <button className="connect">
        <Link href="/auth/signin">Se connecter</Link>
      </button>
      <button className="register">S'inscrire</button>
      <button className="logout" onClick={() => signOut()}>
        Se deconnecter
      </button>
    </div>
  );
}
