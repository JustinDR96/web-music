import { signIn } from "next-auth/react";

export default function AuthBtn() {
  return (
    <div className="signin">
      <button
        className="connect"
        onClick={() =>
          signIn("credentials", { username: "username", password: "password" })
        }
      >
        Se connecter
      </button>
      <button className="register">S'inscrire</button>
      <button className="logout">Se deconnecter</button>
    </div>
  );
}
// onClick={() => signIn()}
