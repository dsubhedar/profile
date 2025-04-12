// Function to change the background color of the 'about' section to a random color
function changeAboutBackground() {
    // Generate a random hex color
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    // Set the background color of the element with id 'about' to the random color
    document.getElementById('about').style.backgroundColor = randomColor;
}

// Function to toggle the 'highlight' class on the specified element by its id
function highlightAbout(id) {
    // Get the element by its id
    const aboutElement = document.getElementById(id);
    // Toggle the 'highlight' class on the element
    aboutElement.classList.toggle('highlight');
}