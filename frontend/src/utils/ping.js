const url = "https://nyanya-church-backend.onrender.com/events";

function pingServer() {
  fetch(url)
    .then((response) => {
      console.log(`Pinged ${url}, Status: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Error pinging ${url}: ${error.message}`);
    });

  // Schedule the next ping after 10 minutes (600,000 milliseconds)
  setTimeout(pingServer, 600000);
}

export default pingServer;
