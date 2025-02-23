// Get the current year and set it in the footer
document.getElementById("current-year").textContent = new Date().getFullYear();

// Get the last modified date of the document and set it in the footer
document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;