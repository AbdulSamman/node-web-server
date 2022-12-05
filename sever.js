const http = require("http");

const port = 3113;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text-plain" });
    res.write("info site");
    res.end();
  })
  .listen(port);

console.log(`listening on http://localhost:${port}`);
