const http = require("node:http");
const url = require("node:url");

http.createServer((req, res) => {
  const userInput = url.parse(req.url, true).query.code;

  // INSECURE DEMO:
  // Never evaluate untrusted user input.
  const result = eval(userInput);

  res.end(String(result));
}).listen(3000);
