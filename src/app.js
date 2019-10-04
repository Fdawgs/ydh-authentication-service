const { authConfig, helmetConfig, serverConfig } = require('./config');
const Server = require('./server/server');

new Server(serverConfig)
	.configureHelmet(helmetConfig)
	.configureWinston()
	.configureAuthorization(authConfig)
	.configureMiddleware()
	.configureRoute(serverConfig.listener_url, true)
	.listen(serverConfig.port);
