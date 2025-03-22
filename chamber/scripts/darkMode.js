const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const menu = document.querySelector(".navigation");

modeButton.addEventListener("click", () => {
  if (modeButton.textContent.includes("🌃")) {
    main.style.background = "#000";
    header.style.background = "#000";
    footer.style.background = "#000";
    menu.style.background = "#000";

    modeButton.textContent = "Light Mode ☀️";
  } else {
    main.style.background = "#fff";
    header.style.background = "#333333";
    footer.style.background = "#333333";
    menu.style.background = "#333333";

    modeButton.textContent = "Dark Mode 🌃 ";
  }
});