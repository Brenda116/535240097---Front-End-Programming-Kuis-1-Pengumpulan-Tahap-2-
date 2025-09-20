document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const message = document.getElementById("message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const fullname = document.getElementById("fullname").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Regex untuk validasi
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    // Hanya huruf & spasi, panjang 3-32 karakter
    const nameRegex = /^[A-Za-z\s]{3,32}$/;
    // Mulai 08 + panjang 10-16 digit angka
    const phoneRegex = /^08\d{8,14}$/;

    // Reset pesan lama
    message.textContent = "";
    message.className = "";

    // Validasi Sign Up
    if (!fullname || !email || !phone || !password || !confirmPassword) {
      message.textContent = "Every field is required!";
      message.className = "error";
    } else if (!nameRegex.test(fullname)) {
      message.textContent = "Full name must be 3-32 letters and cannot contain numbers!";
      message.className = "error";
    } else if (!emailRegex.test(email)) {
      message.textContent = "Email format is not valid!";
      message.className = "error";
    } else if (!phoneRegex.test(phone)) {
      message.textContent = "Phone number must start with 08, be 10-16 digits long, and contain only numbers!";
      message.className = "error";
    } else if (password.length < 8) {
      message.textContent = "Password must be at least 8 characters long!";
      message.className = "error";
    } else if (password !== confirmPassword) {
      message.textContent = "Confirm password does not match!";
      message.className = "error";
    } else {

      // Ambil users lama
      let users = JSON.parse(localStorage.getItem("users")) || [];

      // Tambahkan user baru
      users.push({
        fullname: fullname,
        email: email,
        phone: phone,
        password: password
      });

      // Simpan kembali ke localStorage
      localStorage.setItem("users", JSON.stringify(users));

      message.textContent = "Sign Up successful! Please log in.";
      message.className = "success";

      form.reset();

      setTimeout(() => {
        window.location.href = "login.html";
      }, 1500);
    }
  });
});