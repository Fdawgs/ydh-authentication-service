const config = require('./config').serverConfig;
const authConfig = require('./config').bearerConfig;
const helmetConfig = require('./config').helmetConfig;
const Server = require('./server/server');

new Server(config)
	.configureHelmet(helmetConfig)
	.configureAuthorization(authConfig)
	.configureMiddleware()
	.configureRoute(config.listener_url, true)
	.listen(config.port);
