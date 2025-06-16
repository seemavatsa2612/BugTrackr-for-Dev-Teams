import React from "react";
import "./Login.css"

export default function Login() {
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: ""
  });
  function handleSubmit(e){
    e.preventDefault()
    console.log(credentials)
  }
  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={credentials.username} onChange={(e) => setCredentials((prevValue) => ({...prevValue,username: e.target.value}))} required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={credentials.password} onChange={(e) => setCredentials((prevValue) => ({...prevValue,password: e.target.value}))} required />
        <button type="submit">Login</button>

        <p className="redirect">
          Don't have an account? <a href="signup">Sign Up</a>
        </p>
      </form>
    </div>
  );
}
