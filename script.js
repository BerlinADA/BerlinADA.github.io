// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all project elements
    var projects = document.querySelectorAll('.project');

    // Add click event listener to each project element
    projects.forEach(function(project) {
        project.addEventListener('click', function() {
            // Get the href attribute from the project element
            var link = this.getAttribute('href');

            // Navigate to the link
            window.location.href = link;
        });
    });
});

// Function to apply random shifts to characters
function applyRandomShift() {
  document.querySelectorAll('.char-drift span').forEach(char => {
    // Generate random X and Y positions for the shift
    const randomX = Math.random() * 20; // Shift between -5px to +5px
    const randomY = (Math.random() - 0.5) * 20; // Shift between -5px to +5px

    // Apply the random transform
    char.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
}

// Function to wrap each character in a span
function wrapCharacters() {
  document.querySelectorAll('.char-drift').forEach(el => {
    const text = el.innerText;
    el.innerHTML = text.split('').map(char => `<span>${char}</span>`).join('');
  });
}

// Initial setup
wrapCharacters();
setInterval(applyRandomShift, 100); // Update positions every second