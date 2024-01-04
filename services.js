// script.js
document.querySelector('#package-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the form from submitting

  // Generate a random 8-digit order number
  const orderNumber = Math.floor(10000000 + Math.random() * 90000000);

  // Display the order number to the user
  document.querySelector('#order-number-value').textContent = orderNumber;
  document.querySelector('#order-number').style.display = 'block';
});
