function tapme() {
    var enteredEmail = document.getElementById("emailInput").value;
  
    if (enteredEmail !== '') {
      // Redirect to the next page
      window.location.href = './get.html';
    } else {
      // Display an alert if no email is entered
      alert('Please enter an email.');
    }
  }