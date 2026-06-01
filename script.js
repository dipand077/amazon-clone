// Add to cart functionality
document.querySelectorAll(".product button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});

// Search functionality
document.querySelector(".search-btn").addEventListener("click", () => {
  const query = document.querySelector(".search-box").value;
  alert("Searching for: " + query);
});
