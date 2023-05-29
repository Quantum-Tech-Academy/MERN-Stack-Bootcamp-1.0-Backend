const http = require("http");

const server = http.createServer(function (req, res) {
  const { url, method, headers } = req;
  console.log(headers);

  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write("<html><head>");
    res.write("<title>Home Page</title>");
    res.write("</head><body>");
    res.write("<h1>Welcome to the main page</h1>");
    return res.end("</body></html");
  } else if (url === "/users" && method === "GET") {
    const users = ["Ijaz", "Haris", "Anis"];
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    res.write(`<ul>`);
    res.write(`<li>${users[0]}</li>`);
    res.write(`<li>${users[1]}</li>`);
    res.write(`<li>${users[2]}</li>`);
    return res.end("</ul>");
  } else {
    res.statusCode = 404;
    res.write("<h1>Route not found...</h1>");
    res.end();
  }
});

server.listen(4000);
