import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [isUser, setUser] = React.useState(true)
  const [err, setErr] = React.useState("")
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
  });
  function handleSubmit(e) {
    e.preventDefault();
    setErr("No User")
    setUser(false)
    console.log(credentials);
  }
  return (
    isUser ? (
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login</h2>

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
          <button type="submit">Login</button>

          <Link to="/Auth/Signup">
            <p>Don't have an account?</p>
          </Link>

          <Link to="/Auth/Forget">
            <p>Forgot Password?</p>
          </Link>
        </form>
      </div>
    ) : (
      <div className="login-container">
        <div className="login-form">
          <h2>{err}</h2>
          <button className="but-mid" onClick={()=>setUser(true)}>OK</button>
        </div>
      </div>
    )
  );
}
