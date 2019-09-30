const config = require('./config').serverConfig;
const Server = require('./server/server');

new Server(config)
	.configureHelmet()
	.configureMiddleware()
	.configureRoute(config.listener_url, true)
	.listen(config.port);
