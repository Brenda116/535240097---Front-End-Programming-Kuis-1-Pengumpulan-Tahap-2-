// Alert untuk button Learn More
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".product-card .btn");

  buttons.forEach((btn) => {
    const href = btn.getAttribute("href");
    if (!href) {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        alert("More product details will be available soon!");
      });
    }
  });
});


// Filter Function
const filterButtons = document.querySelectorAll('.filter-buttons button');
const products = document.querySelectorAll('.product-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      products.forEach(product => {
        if (category === 'all' || product.getAttribute('data-category') === category) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
    });
  });