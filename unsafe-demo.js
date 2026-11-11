const http = require("node:http");

http.createServer((req, res) => {
  const userInput = new URL(
    req.url,
    "http://localhost"
  ).searchParams.get("code");

  // INSECURE DEMO:
  // Never evaluate untrusted user input.
  const result = eval(userInput);

  res.end(String(result));
}).listen(3000);
