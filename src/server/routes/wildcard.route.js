const { Router } = require('express');
const passport = require('passport');
const request = require('request');
const queryString = require('query-string');

const router = new Router();

// Import middleware
const sanitize = require('sanitize-middleware');

/**
 * @author Frazer Smith
 * @description Sets routing options for server.
 * @param {Object} options
 * @returns {Router} express router instance.
 */
module.exports = function wildcardRoute(options) {
	const { config } = options;

	router.use(sanitize());

	router.options('*');
	router.get(
		'*',
		passport.authenticate('bearer', { session: false }),
		(req, res, next) => {
			if (
				config &&
				config.routing &&
				config.routing.listenerUrl &&
				config.routing.hide
			) {
				request
					.get(
						`${
							config.routing.listenerUrl + req.baseUrl
						}?${queryString.stringify(req.query)}`
					)
					.on('error', () => {
						res.status(500);
						next(new Error('Error connecting to webservice'));
					})
					.on('response', (response) => {
						if (config.routing.hide === true) {
							// Remove preflight headers
							delete response.headers[
								'access-control-allow-methods'
							];

							// Remove or amend inaccurate headers
							delete response.headers.etag;
							delete response.headers['last-modified'];
							response.headers.allow = 'GET';

							// Remove security risk headers
							delete response.headers.location;
							delete response.headers.server;
						}
					})
					.pipe(res);
			} else {
				res.status(500);
				next(new Error('Missing server config values'));
			}
		}
	);

	return router;
};
