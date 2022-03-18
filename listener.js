var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  console.log("./dist" + req.url);
  fs.readFile("./dist"+ req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    if(req.url.endsWith("js")) {
      res.setHeader("Content-Type", "text/javascript");
    } else if (req.url.endsWith("html")) {
      res.setHeader("Content-Type", "text/html");
    }
    res.writeHead(200);
   res.end(data);
  });
}).listen(8081);

