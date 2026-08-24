// Grab the two elements we need from the page
const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

// Toggle hamburger menu open/closed on click
navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");

  // Keep accessibility state in sync
  const isOpen = navMenu.classList.contains("open");
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close the menu when any nav link is clicked
const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// Theme Toggle
const themeToggle = document.querySelector("#theme-toggle");
const root = document.documentElement; //<html> element

// Apply saved theme on load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  root.classList.add("light-theme");
  themeToggle.textContent = "🌙";
}

// On click, switch the theme, update the icon, and remember choice
themeToggle.addEventListener("click", () => {
  root.classList.toggle("light-theme");

  const isLight = root.classList.contains("light-theme");
  themeToggle.textContent = isLight ? "🌙" : "☀️";
  localStorage.setItem("theme", isLight ? "light" : "dark");
});
