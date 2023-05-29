const http = require("http");
const { generateHTML } = require("./util")
const fs = require("fs");

function requestHandler(req, res) {
    const { url, method } = req;

    if(url === "/") {
        res.statusCode = 200;
        res.end(generateHTML("Home Page", "<h1>Welcome to Home Page...</h1>"));
    } else if(url === "/user" && method === "GET") {
        res.statusCode = 200;
        res.end(generateHTML("Add User", "<form action='/user' method='POST'><input type='text' name='email'><input type='submit'></form>"))
    } else if(url === "/user" && method === "POST") {
        const data = [];
        req.on("data", function (chunk) {
            data.push(chunk);
        })
        
        req.on("end", function () {
            console.log("data received", data)
            const result = Buffer.concat(data).toString()
            fs.writeFileSync("body.txt", result)
            res.end(result)
        })
    } else {
        res.statusCode = 404;
        res.end(generateHTML("Page Not Found", "<h1>Invalid Route, not found</h1>"))
    }
}

const server = http.createServer(requestHandler);

server.listen(4000)