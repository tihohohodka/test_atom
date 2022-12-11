const http = require("http");
const host = '0.0.0.0';
const port = 5500;


const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
      res.writeHead(200);
       res.setHeader("Access-Control-Allow-Origin", "*");
      res.end(`{"message": "This is a JSON response"}`);
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
