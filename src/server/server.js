const bearerToken = require('express-bearer-token');
const compression = require('compression');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const http = require('http');
const https = require('https');
const expressWinston = require('express-winston');
const winston = require('winston');
const WinstonRotate = require('winston-daily-rotate-file');
const error = require('fhir-stu3-subscription-resthook/lib/handlers/error');
const authHeader = require('./middleware/auth-header.middleware');

const wildcardRoute = require('./routes/wildcard.route');

class Server {
	/**
	 * @param {Object} config - Server configuration values.
	 */
	constructor(config = {}) {
		// Define any default settings the server should have to get up and running
		const defaultConfig = {
			https: false,
			name: 'auth-service'
		};
		this.config = Object.assign(defaultConfig, config);

		// Setup our express instance
		this.app = express();

		// Return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets up bearer and auth middleware.
	 * @returns {this} self
	 */
	configureAuthorization() {
		// Retrieve and then check for matching bearer token
		this.app.use(bearerToken());
		this.app.use(authHeader(this));

		// Return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets middleware options for server.
	 * @returns {this} self
	 */
	configureMiddleware() {
		// Add compression
		this.app.use(compression({ level: 9 }));

		// Error handling
		this.app.use(error());

		// Return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets Helmet options for server.
	 * @param {Object} helmetConfig - Helmet configuration values.
	 * @returns {this} self
	 */
	configureHelmet(helmetConfig) {
		// Use Helmet to set response headers
		this.app.use(helmet(helmetConfig));

		// Return self for chaining
		return this;
	}

	configureRoutes() {
		this.app.use('*', wildcardRoute(this));

		// Return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Sets Winston Daily Rotate options for server.
	 * Useful as the Mirth logs will only show the requests coming from
	 * localhost.
	 * @param {Object} winstonRotateConfig - Winston Daily Rotate configuration values.
	 * @returns {this} self
	 */
	configureWinston(winstonRotateConfig) {
		const transport = new WinstonRotate(winstonRotateConfig);

		this.app.use(
			expressWinston.logger({
				format: winston.format.combine(
					winston.format.colorize(),
					winston.format.json()
				),
				requestWhitelist: [
					'url',
					'headers',
					'method',
					'httpVersion',
					'originalUrl',
					'query',
					'ip',
					'_startTime'
				],
				transports: [transport]
			})
		);

		// Return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Start the server.
	 * @param {string} port - Port for server to listen on.
	 * @returns {this} self
	 */
	listen(port) {
		const server = this.config;
		// Update the express app to be an instance of createServer
		if (server.https === true) {
			const options = {};
			// Attempt to use PFX file if present
			if (server.ssl.pfx.pfx) {
				options.pfx = fs.readFileSync(server.ssl.pfx.pfx);
				options.passphrase = server.ssl.pfx.passphrase;
			} else {
				options.cert = fs.readFileSync(server.ssl.cert);
				options.key = fs.readFileSync(server.ssl.key);
			}

			this.app = https.createServer(options, this.app);
			this.config.protocol = 'https';
		} else {
			this.config.protocol = 'http';
			this.app = http.createServer(this.app);
		}

		// Start the app
		this.app.listen(port);
		console.log(
			`${server.name} listening for requests at ${this.config.protocol}://127.0.0.1:${port}`
		);

		// Return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @description Shut down server (non-gracefully).
	 * @returns {Promise<this>} self
	 */
	shutdown() {
		return new Promise((resolve) => {
			this.app.close();
			resolve(this);
		});
	}
}

module.exports = Server;
