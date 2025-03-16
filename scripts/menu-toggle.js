// JavaScript to toggle the menu
const hamburger = document.getElementById("hamburger-btn"); // Hamburger button
const menu = document.querySelector("nav ul"); // The navigation menu

hamburger.addEventListener("click", () => {
    menu.classList.toggle("mobile-menu"); // Toggle the mobile-menu class
});
