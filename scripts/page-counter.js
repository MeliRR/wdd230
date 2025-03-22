// Check if 'visitCount' exists in localStorage
let visitCount = localStorage.getItem('visitCount');

// If it doesn't exist, initialize it to 0
if (!visitCount) {
    visitCount = 0;
}

// Increment the visit count
visitCount++;

// Update the page visit count in the DOM
document.getElementById('visit-count').textContent = visitCount;

// Store the new visit count in localStorage
localStorage.setItem('visitCount', visitCount);
