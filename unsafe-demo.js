const http = require("node:http");
const url = require("node:url");

http.createServer((req, res) => {
  const userInput = url.parse(req.url, true).query.code;

  // FIXED: never eval() user input; return it as plain text only.
  res.writeHead(200, { "Content-Type": "text/plain; charset=utf-8" });
  res.end(String(userInput ?? ""));
}).listen(3000);
