<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Login</title>
  <link rel="stylesheet" href="css/login.css" />
</head>
<body>
  <div class="login-container">
    <form class="login-form" action="/login" method="POST">
      <h2>Login</h2>

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

      <button type="submit">Login</button>

      <p class="redirect">Don't have an account? <a href="signup.html">Sign Up</a></p>
    </form>
  </div>
</body>
</html>
