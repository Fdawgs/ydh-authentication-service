const config = require('./config').serverConfig;
const middlewareConfig = require('./config').bearerConfig;
const Server = require('./server/server');

new Server(config)
	.configureHelmet()
	.configureMiddleware(middlewareConfig)
	.configureRoute(config.listener_url, true)
	.listen(config.port);
