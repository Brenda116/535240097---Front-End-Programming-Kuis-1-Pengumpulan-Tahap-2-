document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    // Regex untuk validasi email
    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    // Menghapus pesan lama
    let oldMsg = document.querySelector(".message");
    if (oldMsg) oldMsg.remove();

    // Membuat elemen pesan
    const message = document.createElement("p");
    message.classList.add("message");
    form.appendChild(message);

    if (!email || !password) {
      message.textContent = "Enter an email or password!";
      message.classList.add("error");
    } else if (!emailRegex.test(email)) {
      message.textContent = "Email format is not valid!";
      message.classList.add("error");
    }
  });
});