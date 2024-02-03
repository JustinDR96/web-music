import { useState } from "react";
import axios from "axios";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    try {
      const response = await axios.post("/api/signup", {
        name,
        email,
        password,
      });
      console.log("User created:", response.data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <span className="title">Sign Up</span>
      <div className="form_control">
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label className="label">Username</label>
      </div>
      <div className="form_control">
        <input
          type="email"
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label className="label">Email</label>
      </div>
      <div className="form_control">
        <input
          type="password"
          className="input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
  );
}
