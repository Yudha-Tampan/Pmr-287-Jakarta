// script.js
document.addEventListener("DOMContentLoaded", function() {
  const loader = document.getElementById("loader");
  const darkModeToggle = document.getElementById("darkModeToggle");
  const body = document.body;
  
  // Loader
  setTimeout(() => {
    loader.classList.add("hidden");
  }, 1000);
  
  // Dark Mode Toggle
  darkModeToggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  });
  
  // Check for saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
  }
});