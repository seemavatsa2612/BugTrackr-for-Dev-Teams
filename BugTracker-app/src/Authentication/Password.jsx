import React from "react";
import { Link } from "react-router-dom";

import "./Login.css"

export default function Password() {
  const [isPass, setPass] = React.useState(false);
  const [Password, setPassword] = React.useState("");
  const [credentials, setCredentials] = React.useState({
    email: "",
    username: ""
  })

  function handleSubmit(e){
    e.preventDefault()
    setPassword("Your Password")
    setPass(true)
    console.log(credentials)
  }
  return !isPass ? (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Find Password</h2>

        <label htmlFor="email">Email-ID</label>
        <input type="text" name="email" value={credentials.email} onChange={(e) => setCredentials((prevValue) => ({...prevValue,email: e.target.value}))} required />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={credentials.username} onChange={(e) => setCredentials((prevValue) => ({...prevValue,username: e.target.value}))} required />

        <button type="submit">Find</button>

        <Link to="/Auth/">
          <p>Back to Login</p>
        </Link>
      </form>
    </div>
  ) : (
    <div className="login-container">
      <div className="login-form">
        <h2>{Password}</h2>
        <button onClick={() => setPass(false)} className="but-mid">Done</button>
      </div>
    </div>
  );
}
