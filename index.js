const http = require("http");
const fs = require("fs");
const port = 2023;

const myServer = http.createServer((req, res) => {
  const handleRoute = (file) => {
    fs.readFile(file, (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  };
  if (req.url === "/") {
    handleRoute("index.html");
  } else if (req.url === "/about") {
    handleRoute("about.html");
  } else if (req.url === "/contact") {
    handleRoute("contact.html");
  } else {
    handleRoute("error.html");
  }
});
myServer.listen(port, () => {
  console.log(`server running on port ${port} `);
});
