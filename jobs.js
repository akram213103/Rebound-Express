// script.js
document.querySelector('#signup-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting
  document.querySelector('#signup-form').style.display = 'none'; // Hide the form
  document.querySelector('#thankyou-message').style.display = 'block'; // Show the thank you message
});
