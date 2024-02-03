/* eslint-disable react/no-unescaped-entities */
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import "../../styles/main.scss";

import { useEffect } from "react";

export default function SignIn() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  useEffect(() => {
    if (!loading) {
      if (session) {
        console.log("Connexion réussie");
      } else {
        console.log("Échec de la connexion");
      }
    }
  }, [session, loading]);
  return (
    <div className="signin">
      <div className="container">
        <input type="checkbox" id="register_toggle" />
        <div className="slider">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              // Ici, nous récupérons les valeurs des champs du formulaire
              const target = e.target as HTMLFormElement;
              const username = target.username.value;
              const password = target.password.value;
              // Nous appelons la fonction signIn avec le type de fournisseur et les données du formulaire
              signIn("credentials", {
                username,
                password,
                callbackUrl: "/",
              });
            }}
          >
            <span className="title">Login</span>
            <div className="form_control">
              <input type="text" className="input" name="username" required />
              <label className="label">Username</label>
            </div>
            <div className="form_control">
              <input
                type="password"
                name="password"
                className="input"
                required
              />
              <label className="label">Password</label>
            </div>
            <button type="submit">Login</button>

            <span className="bottom_text">
              Don't have an account?
              <label htmlFor="register_toggle" className="switch">
                Sign Up
              </label>
            </span>
          </form>
          <form className="form">
            <span className="title">Sign Up</span>
            <div className="form_control">
              <input type="text" className="input" name="username" required />
              <label className="label">Username</label>
            </div>
            <div className="form_control">
              <input type="email" className="input" name="email" required />
              <label className="label">Email</label>
            </div>
            <div className="form_control">
              <input
                type="password"
                className="input"
                name="password"
                required
              />
              <label className="label">Password</label>
            </div>
            <button>Sign Up</button>

            <span className="bottom_text">
              Already have an account?
              <label htmlFor="register_toggle" className="switch">
                Sign In
              </label>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
