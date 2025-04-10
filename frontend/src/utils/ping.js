const url = "https://nyanya-church-website-backend.onrender.com/api/events";

function pingServer() {
  fetch(url)
    .then((response) => {
      console.log(`Pinged ${url}, Status: ${response.status}`);
    })
    .catch((error) => {
      console.error(`Error pinging ${url}: ${error.message}`);
    });

  // Schedule the next ping after 10 minutes (600,000 milliseconds)
  setTimeout(pingServer, 300000);
}

export default pingServer;
