const http = require("http");

const server = http.createServer((request, response) => {
    const result = {
        name:"1st server",
        description:"This is my fisrt server"
    };
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify(result));
});

server.listen(4000, () => {
  console.log("My server started at 4000 .....");
});
