document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card .btn");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("More product details will be available soon!");
    });
  });
});