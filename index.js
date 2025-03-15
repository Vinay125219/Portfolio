function sendMessage() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
  
    const data = {
      name: name,
      email: email,
      subject: subject,
      message: message
    };
  
    // Make an HTTP request to the server
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:3000/save-user-details', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          alert('User details saved successfully');
        } else {
          alert('Failed to save user details. Please try again.');
        }
      }
    };
  
    const jsonData = JSON.stringify(data);
    xhr.send(jsonData);
  }
  