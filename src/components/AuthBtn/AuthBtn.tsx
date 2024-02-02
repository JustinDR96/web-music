/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

export default function AuthBtn() {
  return (
    <div className="authbtn">
      <button className="connect">
        <Link href="/auth/signin">Se connecter</Link>
      </button>
      <button className="register">S'inscrire</button>
      <button className="logout">Se deconnecter</button>
    </div>
  );
}
// onClick={() => signIn()}