function checkAndRedirect() {
    var enteredPassword = document.getElementById("passwordInput").value;
  
    if (enteredPassword !== '') {
      // Redirect to the next page
      window.location.href = './get2.html';
    } else {
      // Display an alert if no password is entered
      alert('Please enter a password.');
    }
  }