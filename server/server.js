const http = require('http');
const url = require('url');

var server = http.createServer(function(req, res) {

  console.log('got a message!!!' + req.params);

  const query = url.parse(req.url, true).query;

  console.log(query);

  res.write('hello ' + query.name);
  res.end();

});

server.listen(3000);
