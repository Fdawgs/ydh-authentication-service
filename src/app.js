const fs = require('fs');
const Server = require('./server/server');

// Retrieve config values
const rawData = fs.readFileSync('./src/config.json');
const config = JSON.parse(rawData);

const server = new Server(config);
server.configureMiddleware();
server.configureHelmet();
server.configureRoute(config.listener_url, true);
server.listen(config.port);
