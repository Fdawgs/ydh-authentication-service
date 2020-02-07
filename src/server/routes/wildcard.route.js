const { Router } = require('express');

const router = new Router();
const request = require('request');
const sanitizeParamString = require('../utils/sanitize-param-string.utils');

/**
 * @author Frazer Smith
 * @description Sets routing options for server.
 * @param {Object} options
 * @returns {Router} express router instance.
 */
module.exports = function configureRoute(options = {}) {
	const { config } = options;

	router.get('*', (req, res) => {
		const parsedParams = sanitizeParamString(req.query);

		if (
			config &&
			config.routing &&
			config.routing.listenerUrl &&
			config.routing.hide
		) {
			request
				.get(
					`${config.routing.listenerUrl +
						req.baseUrl}?${parsedParams}`
				)
				.on('error', () => {
					res.status(500).send('Error connecting to webservice');
				})
				.on('response', (response) => {
					if (config.routing.hide === true) {
						// Remove or amend inaccurate headers
						response.headers['access-control-allow-methods'] =
							'GET';
						delete response.headers.etag;
						delete response.headers['last-modified'];

						// Remove security risk headers
						delete response.headers.location;
						delete response.headers.server;
					}
				})
				.pipe(res);
		} else {
			res.status(500).send('Missing server config values');
		}
	});

	return router;
};
