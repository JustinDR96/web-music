/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";

export default function AuthBtn() {
  const handleSignOut = () => {
    signOut();
    console.log("Bien déconnecté");
  };

  const handleSignIn = () => {
    signIn();
    console.log("Bien connecté");
  };

  return (
    <div className="authbtn">
      <button className="connect" onClick={handleSignIn}>
        Se connecter
      </button>

      <button className="register">S'inscrire</button>
      
      <button className="logout" onClick={() => handleSignOut()}>
        Se deconnecter
      </button>
    </div>
  );
}
