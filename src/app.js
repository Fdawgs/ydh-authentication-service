const fs = require('fs');
const ExpressServer = require('./expressServer');

// Retrieve config values
const rawData = fs.readFileSync('./src/config.json');
const serverConfig = JSON.parse(rawData);

const server = new ExpressServer(serverConfig);
server.configureMiddleware();
server.configureHelmet();
server.configureRoute(serverConfig.listener_url, true);
server.listen(serverConfig.port);
