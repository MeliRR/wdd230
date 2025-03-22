// Set variables to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Initialize the chaptersArray from localStorage or as an empty array
let chaptersArray = getChapterList() || [];

// Populate the list with chapters from localStorage
chaptersArray.forEach(chapter => {
    displayList(chapter); // Display each chapter in the list
});

// Button click event to add a new chapter
button.addEventListener('click', () => {
    if (input.value !== '') { // Check if input is not empty
        // Add chapter to array
        chaptersArray.push(input.value);
        displayList(input.value); // Display the new chapter in the list
        setChapterList(); // Update localStorage with the new array

        // Clear the input field and reset focus
        input.value = '';
        input.focus();
    }
});

// Function to display a chapter in the list
function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    li.textContent = item; // Chapter text
    deleteButton.textContent = '❌'; // Text for delete button

    // Append delete button to the list item
    li.append(deleteButton);
    list.append(li);

    // Add delete functionality
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
        deleteChapter(item); // Remove chapter from array and localStorage
        input.focus(); // Reset focus to input field
    });
}

// Function to set chapters in localStorage
function setChapterList() {
    localStorage.setItem('myFavChapters', JSON.stringify(chaptersArray));
}

// Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavChapters'));
}

// Function to delete a chapter from the array and localStorage
function deleteChapter(chapter) {
    // Filter out the deleted chapter from the array
    chaptersArray = chaptersArray.filter(item => item !== chapter);

    // Update localStorage with the new array
    setChapterList();
}
