
const bearerToken = require('express-bearer-token');
const compression = require('compression');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const https = require('https');
const http = require('http');
const request = require('request');
const error = require('fhir-stu3-subscription-resthook/lib/handlers/error');
const apiKeyCheck = require('./middleware/apikeycheck');

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
	 * @summary Sets middleware options for server.
	 */
	configureMiddleware() {
		// Add compression
		this.app.use(compression({ level: 9 }));

		// Check for matching bearer token
		this.app.use(bearerToken());
		this.app.use((req, res, next) => { req.apikeys = this.config.api_keys; next(); });
		this.app.use(apiKeyCheck);

		// Error handling
		this.app.use(error());
		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @summary Sets Helmet options for server.
	 */
	configureHelmet() {
		// Use Helmet to set response headers
		this.app.use(helmet());
		this.app.use(helmet.noCache());
		this.app.use(helmet.hidePoweredBy());
		this.app.use(helmet.contentSecurityPolicy({
			directives: {
				defaultSrc: ['\'self\''],
				scriptSrc: ['\'self\'', '\'unsafe-inline\''],
				styleSrc: ['\'self\'', '\'unsafe-inline\'']
			}
		}));

		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @summary Sets routing options for server.
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
	 * @summary Start the server.
	 * @param {string} port - Port for server to listen on.
	 */
	listen(port, callback) {
		const server = this.config;
		let protocol;
		// Update the express app to be an instance of createServer
		if (server.USE_HTTPS === true) {
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
	 * @summary Shut down server (non-gracefully).
	 */
	shutdown() {
		this.app.close();

		// return self for chaining
		return this;
	}
}

module.exports = Server;
