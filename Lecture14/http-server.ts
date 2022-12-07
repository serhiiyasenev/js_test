const http = require('http');

const requestListener = function (req, res) {
    res.writeHead(200);
    res.end(`relative url is: '${req.url.split('/')[1]}'`);
}

const server = http.createServer(requestListener);
server.listen(8080);