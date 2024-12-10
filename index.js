// Add your code here


function submitData(name, email) {
    // Define the URL for the POST request
    const url = "http://localhost:3000/users";
  
    // Define the data to send in the body of the request
    const userData = {
      name: name,
      email: email,
    };
  
    // Return the fetch() chain
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData), // Stringify the userData object
    })
      .then(response => response.json()) // Parse the response JSON
      .then(data => {
        // Access the newly created object and append the ID to the DOM
        const body = document.querySelector("body");
        const newId = document.createElement("p");
        newId.textContent = `New User ID: ${data.id}`;
        body.appendChild(newId);
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM
        const body = document.querySelector("body");
        const errorMessage = document.createElement("p");
        errorMessage.textContent = `Error: ${error.message}`;
        body.appendChild(errorMessage);
      });
  }
  