// Get the current year and set it in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get the last modified date of the document and set it in the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;

// Toggle the visibility of the menu when the hamburger button is clicked
document.getElementById('hamburger-btn').addEventListener('click', function() {
    var menu = document.getElementById('nav-menu');
    menu.classList.toggle('hidden');  // Toggle the 'hidden' class
});
