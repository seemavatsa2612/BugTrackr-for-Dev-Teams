
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Sign Up</title>
  <link rel="stylesheet" href="css/signup.css" />
</head>
<body>
  <div class="signup-container">
    <form class="signup-form" action="/signup" method="POST">
      <h2>Create an Account</h2>

      <label for="username">Username</label>
      <input type="text" name="username" required />

      <label for="password">Password</label>
      <input type="password" name="password" required />

      <label for="role">Role</label>
      <select name="role" required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>

      <button type="submit">Sign Up</button>

      <p class="redirect">Already have an account? <a href="login.html">Login</a></p>
    </form>
  </div>
</body>
</html>
