import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

export default function Signup() {
  const [isUser, setUser] = React.useState(false);
  const [err, setErr] = React.useState("");
  const [credentials, setCredentials] = React.useState({
    email: "",
    username: "",
    password: "",
    role: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setErr("User Exists!");
    setUser(true)
    console.log(credentials);
  }
  return !isUser ? (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <label htmlFor="email">Email-ID</label>
        <input
          type="email"
          name="email"
          value={credentials.email}
          onChange={(e) =>
            setCredentials((prevValue) => ({
              ...prevValue,
              email: e.target.value,
            }))
          }
          required
        />

        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={(e) =>
            setCredentials((prevValue) => ({
              ...prevValue,
              username: e.target.value,
            }))
          }
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={(e) =>
            setCredentials((prevValue) => ({
              ...prevValue,
              password: e.target.value,
            }))
          }
          required
        />

        <label htmlFor="role">Role</label>
        <select
          name="role"
          value={credentials.role}
          onChange={(e) =>
            setCredentials((prevValue) => ({
              ...prevValue,
              role: e.target.value,
            }))
          }
          required
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button type="submit">Sign Up</button>

        <Link to="/Auth/">
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  ) : (
    <div className="signup-container">
      <div className="signup-form">
        <h2>{err}</h2>
        <button className="but-mid" onClick={() => setUser(false)}>
          OK
        </button>
      </div>
    </div>
  );
}
