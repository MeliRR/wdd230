// scripts.js

// Get references to the DOM elements
const input = document.querySelector('#favchap');
const addButton = document.querySelector('#addButton');
const chapterList = document.querySelector('#chapterList');

// Add event listener to Add Chapter button
addButton.addEventListener('click', () => {
    const chapterName = input.value.trim(); // Get the chapter name from the input

    if (chapterName === '') {
        alert('Please enter a chapter name');
        input.focus();
        return;
    }

    // Create a new list item for the chapter
    const li = document.createElement('li');

    // Create the delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');

    // Set aria-label for the delete button
    deleteButton.setAttribute('aria-label', `Remove ${chapterName}`);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', () => {
        li.remove(); // Remove the list item when the delete button is clicked
    });

    // Add chapter name to the list item
    li.textContent = chapterName;

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the list
    chapterList.appendChild(li);

    // Clear the input and refocus
    input.value = '';
    input.focus();
});
