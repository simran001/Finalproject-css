// main.js
document.addEventListener("DOMContentLoaded", function () {
    // Include header
    fetch("header.html")
        .then(response => response.text())
        // Convert the response to text
        .then(data => {
            // Set the inner HTML of the header element with the fetched data
            document.querySelector("header").innerHTML = data;
        });

    // Include footer
    fetch("footer.html")
    // Convert the response to text
        .then(response => response.text()) 
        .then(data => {
            // Set the inner HTML of the footer element with the fetched data
            document.querySelector("footer").innerHTML = data;
        });
});
function redirectToPage() {
    // Replace 'target-page.html' with the URL of the page you want to redirect to
    window.location.href = 'contact.html';
}
