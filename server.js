var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist/',
  port: process.env.PORT || 3000,
  templates: {
    index: 'index.html'
  }
})

server.start(function () {
  console.log('Server listening to', server.port);
})

server.on('request', function (req, res) {
  // req.path is the URL resource (file name) from server.rootPath
  // req.elapsedTime returns a string of the request's elapsed time
})
