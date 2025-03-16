// Update Last Modified Date
document.getElementById("last-modified-date").textContent = document.lastModified;

// Hamburger Menu Toggle
document.getElementById("hamburger-btn").addEventListener("click", () => {
    document.getElementById("menu").classList.toggle("mobile");
});

// Meet & Greet Banner
document.addEventListener("DOMContentLoaded", () => {
    const today = new Date().getDay(); // 0 = Sunday, 1 = Monday, etc.
    if (today >= 1 && today <= 3) { // Show on Monday, Tuesday, Wednesday
        const banner = document.createElement("div");
        banner.classList.add("meet-greet-banner");
        banner.innerHTML = `
            <p>Join us for a Chamber Meet and Greet on Wednesday at 7:00 p.m.!</p>
            <button id="close-banner">❌</button>
        `;
        document.body.prepend(banner);
        
        document.getElementById("close-banner").addEventListener("click", () => {
            banner.style.display = "none";
        });
    }
});
