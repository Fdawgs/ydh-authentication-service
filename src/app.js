const fs = require('fs');
const Server = require('./server/server');

// Retrieve config values
const rawData = fs.readFileSync('./src/config.json');
const config = JSON.parse(rawData);

new Server(config)
	.configureHelmet()
	.configureMiddleware()
	.configureRoute(config.listener_url, true)
	.listen(config.port);
