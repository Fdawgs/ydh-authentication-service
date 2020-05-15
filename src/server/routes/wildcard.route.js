const { Router } = require('express');
const passport = require('passport');
const request = require('axios');
const queryString = require('querystring');

const router = new Router();

// Import middleware
const cors = require('cors');
const sanitize = require('sanitize-middleware');

/**
 * @author Frazer Smith
 * @description Sets routing options for server.
 * @param {Object} options
 * @param {Object} options.config
 * @returns {Router} Express router instance.
 */
module.exports = function wildcardRoute(options) {
	const { config } = options;

	router.use(sanitize(), cors(config.cors));

	router
		.route('*')
		.get(
			passport.authenticate('bearer', { session: false }),
			(req, res, next) => {
				request
					.get(
						`${
							config.listenerUrl + req.baseUrl
						}?${queryString.stringify(req.query)}`,
						{
							responseType: 'stream'
						}
					)
					.then(
						(response) => {
							// Remove or amend inaccurate headers
							delete response.headers.etag;
							delete response.headers['last-modified'];

							// Remove security risk headers
							delete response.headers.location;
							delete response.headers.server;

							res.set(response.headers);
							response.data.pipe(res);
						},
						(err) => {
							res.status(500);
							console.log(
								`Error connecting to webservice: ${err}`
							);
							next(
								new Error(
									`Error connecting to webservice: ${err}`
								)
							);
						}
					);
			}
		);

	return router;
};
