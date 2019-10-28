const express = require('express');

const http = require('http');
const Server = require('./server');
const {
	authConfig, helmetConfig, serverConfig, winstonRotateConfig
} = require('../config');

let mirthServer;
let server;
// Stand up Express server to mimic responses from Mirth Connect FHIR Listener
mirthServer = express();

mirthServer.get('/test', (req, res) => {
	res.setHeader('server', 'Mirth Connect FHIR Server (3.8.0.b1172)');
	res.setHeader('access-control-allow-methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.setHeader('access-control-allow-origin', '*');
	res.setHeader('access-control-expose-headers', 'Content-Location, Location');
	res.setHeader('etag', 'W/"1"');
	// res.setHeader('content-type', 'application/fhir+json; charset=UTF-8');
	res.setHeader('content-encoding', 'gzip');
	res.setHeader('content-length', '790');

	res.setHeader('connection', 'keep-alive');
	res.setHeader('date', 'Thu, 04 Jul 2019 11:59:41 GMT');

	res.removeHeader('x-powered-by');
	res.removeHeader('connection');
	return res.status(200).send({});
});
mirthServer = http.createServer(mirthServer);
mirthServer.listen(8206, () => {
	console.log('Test Mirth listening at 8206');
});

// Stand up server
server = new Server(serverConfig)
	.configureHelmet(helmetConfig)
	.configureWinston(winstonRotateConfig)
	.configureAuthorization(authConfig)
	.configureMiddleware()
	.configureRoute(serverConfig.listener_url, true)
	.listen(serverConfig.port);