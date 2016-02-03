"use strict"

var http = require('http')
var fs = require('fs')


http.createServer(function(req,res) {

if (req.url === '/') {
    res.writeHead(200, {'content-type': 'text/html'})
    fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res)
}

if (req.url === '/api') {
    res.writeHead(200, {'content-type': 'application/json'})

      var obj = {
        first: 'John',
        last: 'Doe'
      }

      res.end(JSON.stringify(obj))
}

}).listen(8080, '127.0.0.1')
