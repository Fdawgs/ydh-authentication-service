const bearerToken = require('express-bearer-token');
const compression = require('compression');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const http = require('http');
const https = require('https');
const request = require('request');
const expressWinston = require('express-winston');
const winston = require('winston');
const WinstonRotate = require('winston-daily-rotate-file');
const error = require('fhir-stu3-subscription-resthook/lib/handlers/error');
const authHeader = require('./middleware/auth-header.middleware');

class Server {
	/**
	 * @class
	 * @param {Object} config - Server configuration values.
	 */
	constructor(config = {}) {
		this.config = config;
		// Setup our express instance
		this.app = express();

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets up bearer and auth middleware.
	 * @param {Object} authConfig - Authentication configuration values.
	 */
	configureAuthorization(authConfig) {
		// Retrieve and then check for matching bearer token
		this.app.use(bearerToken());
		this.app.use(authHeader(authConfig.api_keys));

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets middleware options for server.
	 */
	configureMiddleware() {
		// Add compression
		this.app.use(compression({ level: 9 }));

		// Error handling
		this.app.use(error());

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets Helmet options for server.
	 * @param {Object} helmetConfig - Helmet configuration values.
	 */
	configureHelmet(helmetConfig) {
		// Use Helmet to set response headers
		this.app.use(helmet(helmetConfig));

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets Winston Daily Rotate options for server.
	 * Useful as the Mirth logs will only show the requests coming from
	 * localhost.
	 * @param {Object} winstonRotateConfig - Winston Daily Rotate configuration values.
	 */
	configureWinston(winstonRotateConfig) {
		const transport = new (WinstonRotate)(winstonRotateConfig);

		this.app.use(expressWinston.logger({
			format: winston.format.combine(
				winston.format.colorize(),
				winston.format.json()
			),
			requestWhitelist: ['url', 'headers', 'method', 'httpVersion', 'originalUrl', 'query', 'ip', '_startTime'],
			transports: [
				transport
			]
		}));

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets routing options for server.
	 * @param {string} listenerUrl - URL of FHIR REST hook endpoint.
	 * @param {boolean} hide - If true, remove and amend inaccurate/security risk headers.
	 */
	configureRoute(listenerUrl, hide) {
		this.app.get('*', (req, res) => {
			request.get(listenerUrl + req.originalUrl).on('response', (response) => {
				if (hide) {
					// Remove or amend inaccurate headers
					response.headers['access-control-allow-methods'] = 'GET';
					delete response.headers.etag;
					delete response.headers['last-modified'];

					// Remove security risk headers
					delete response.headers.location;
					delete response.headers.server;
				}
			}).pipe(res);
		});

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Start the server.
	 * @param {string} port - Port for server to listen on.
	 * @param {Function} callback
	 */
	listen(port, callback) {
		const server = this.config;
		let protocol;
		// Update the express app to be an instance of createServer
		if (server.https === true) {
			this.app = https.createServer({
				cert: fs.readFileSync(server.ssl.cert),
				key: fs.readFileSync(server.ssl.key)
			}, this.app);
			protocol = 'https';
		} else {
			protocol = 'http';
			this.app = http.createServer(this.app);
		}

		// Start the app
		this.app.listen(port, callback);
		console.log(`${server.name} listening for requests at ${protocol}://127.0.0.1:${port}`);

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Shut down server (non-gracefully).
	 */
	shutdown() {
		this.app.close();

		// return self for chaining
		return this;
	}
}

module.exports = Server;
