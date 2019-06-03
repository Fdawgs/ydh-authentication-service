/* eslint-disable no-console */
'use strict';
const apikey = require('./middleware/apikey');
const compression = require('compression');
const error = require('./middleware/error');
const express = require('express');
const fs = require('fs');
const helmet = require('helmet');
const https = require('https');
const http = require('http');
const request = require('request');

class expressServer {

	/**
	 * @class
	 * @param {Object} config - Server configuration values.
	 */
	constructor(config = {}) {

		this.config = config;
		// Setup our express instance
		this.app = express();
		this.app.use(helmet());
		this.app.use(helmet.noCache());
		this.app.use(helmet.hidePoweredBy());
		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @summary Sets middleware options for Express server.
	 */
	configureMiddleware() {
		// Add compression
		this.app.use(compression({ level: 9 }));
		// Check for matching API key
		this.app.use(apikey(this.config.apikey));
		// Add content security policies
		this.app.use(helmet.contentSecurityPolicy({
			directives: {
				defaultSrc: ['\'self\'']
			}
		}));
		// Error handling
		this.app.use(error());
		// return self for chaining
		return this;
	}

	/**
	 * @author Frazer Smith
	 * @summary Sets routing options for Express server.
	 * @param {string} listenerUrl - URL of FHIR REST hook endpoint.
	 */
	configureRoute(listenerUrl) {
		this.app.get('*', function (req, res) {
			request.get(listenerUrl + req.originalUrl).on('response', function (response) {

				// Remove or amend inaccurate headers
				response.headers['access-control-allow-methods'] = 'GET';
				delete response.headers.etag;
				delete response.headers['last-modified'];
				
				// Remove security risk headers
				delete response.headers.location;
				delete response.headers.server;
			}).pipe(res);
		});
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
		if (server.USE_HTTPS == true) {
			this.app = https.createServer({
				key: fs.readFileSync(server.ssl.key),
				cert: fs.readFileSync(server.ssl.cert)
			}, this.app);
			protocol = 'https';

		} else {
			protocol = 'http';
			this.app = http.createServer(this.app);
		}

		// Start the app
		this.app.listen(port, callback);
		console.log(`${server.name} listening for requests at ${protocol}://127.0.0.1:${port}`);
	}
}


module.exports = expressServer;