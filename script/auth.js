document.addEventListener("DOMContentLoaded", () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn !== "true") {
  // Membedakan page auth jadi tidak mengganggu halaman lain
  document.body.classList.add("auth-page");

  document.body.innerHTML = `
    <body class="auth-page">
    <div class="auth-card">
      <div class="auth-warning">
        <h2>You are not logged in</h2>
        <p>Please log in or sign up to access the home page</p>
        <p><a href="login.html">Login</a> | <a href="signup.html">Sign Up</a></p>
      </div>
    </div>
    </body>
    `;
  }
});

// Logout function yang menghapus status login dari localStorage
function logout() {
      localStorage.removeItem("isLoggedIn");
      window.location.href = "login.html";
}