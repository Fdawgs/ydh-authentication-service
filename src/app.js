'use strict';
const expressServer = require('./expressServer');
const fs = require('fs');

// If USE_HTTPS set to true, server will use the ssl key and cert in the object to provide HTTPS.
const rawData = fs.readFileSync('./src/config.json');
const serverConfig = JSON.parse(rawData);

var server = new expressServer(serverConfig);
server.configureMiddleware();
server.configureRoute();
server.listen(serverConfig.port);