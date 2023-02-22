const http = require("http");

const host = "localhost";
const port = 8000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("first server");
});

server.listen(port, host, () => {
  console.log("server running");
});
