import React from "react";
import "./Signup.css"

export default function Signup() {
  const [credentials, setCredentials] = React.useState({
    email: "",
    username: "",
    password: "",
    role: ""
  });
  function handleSubmit(e){
    e.preventDefault()
    console.log(credentials)
  }
  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Create an Account</h2>

        <label htmlFor="email">Email-ID</label>
        <input type="email" name="email" value={credentials.email} onChange={(e) => setCredentials((prevValue) => ({...prevValue,email: e.target.value}))} required />

        <label htmlFor="username">Username</label>
        <input type="text" name="username" value={credentials.username} onChange={(e) => setCredentials((prevValue) => ({...prevValue,username: e.target.value}))}required />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={credentials.password} onChange={(e) => setCredentials((prevValue) => ({...prevValue,password: e.target.value}))} required />

        <label htmlFor="role">Role</label>
        <select name="role" value={credentials.role} onChange={(e) => setCredentials((prevValue) => ({...prevValue,role: e.target.value}))} required>
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>

        <button type="submit">Sign Up</button>

        <p className="redirect">
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
}
