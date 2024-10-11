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