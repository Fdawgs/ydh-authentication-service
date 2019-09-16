const fs = require('fs');
const Server = require('./server/server');

// Retrieve config values
const rawData = fs.readFileSync('./src/config.json');
const serverConfig = JSON.parse(rawData);

const server = new Server(serverConfig);
server.configureMiddleware();
server.configureHelmet();
server.configureRoute(serverConfig.listener_url, true);
server.listen(serverConfig.port);
