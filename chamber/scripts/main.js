// Dynamic Date for Last Modified
const lastModifiedDate = document.getElementById("last-modified-date");
lastModifiedDate.textContent = document.lastModified;

// Hamburger Menu Toggle
const hamburgerBtn = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

hamburgerBtn.addEventListener("click", () => {
    menu.classList.toggle("mobile");
});
