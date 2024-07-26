// script.js

// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // For demonstration purposes, log the form data
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
  
    // You can add additional functionality here, such as sending the data to a server using fetch or AJAX
    // Reset the form after submission
    document.getElementById('contact-form').reset();
  });
  